import type { FieldPath, FieldValues, UseFormSetError } from "react-hook-form";
import type {
    ErrorHandlerConfig,
    ErrorHandlerStrategy,
    Violation,
} from "@api/errors/errorHandlerStrategy";
import { useNavigate } from "react-router-dom";
import useNotification from "@shared/hooks/useNotification";
import { errorCodeStrategies } from "@api/errors/errorCodeStrategies";
import { useCallback } from "react";
import type { ProblemDetail } from "@api/errors/problemDetail";

export const useApiErrorHandler = <TFormData extends FieldValues = FieldValues>(
    config?: ErrorHandlerConfig<TFormData>,
    customStrategies?: Record<string, ErrorHandlerStrategy<TFormData>>,
) => {
    const navigate = useNavigate();
    const { errorNotify, warningNotify, successNotify, infoNotify } = useNotification(); // ⬅️ HOOK tylko tutaj
    const { setError, navigate: customNavigate, onCustom, onViolations } = config || {};

    const notifiers = {
        error: errorNotify,
        warning: warningNotify,
        success: successNotify,
        info: infoNotify,
    } as const;

    return useCallback(
        (error: unknown, overrideStrategy?: ErrorHandlerStrategy<TFormData>) => {
            if (!isProblemDetail(error)) {
                errorNotify("Wystąpił nieoczekiwany błąd");
                return;
            }

            if (hasViolations(error)) {
                onViolations?.(error.violations);
                if (setError) {
                    for (const { field, message } of error.violations) {
                        setError(field as FieldPath<TFormData>, { type: "server", message });
                    }
                }
                return;
            }

            if (overrideStrategy) {
                executeStrategy(error, overrideStrategy, {
                    setError,
                    navigate: customNavigate || navigate,
                    onCustom,
                    notifiers,
                });
                return;
            }

            const customStrategy = customStrategies?.[error.errorCode || ""];
            if (customStrategy) {
                executeStrategy(error, customStrategy, {
                    setError,
                    navigate: customNavigate || navigate,
                    onCustom,
                    notifiers,
                });
                return;
            }

            const defaultStrategy =
                errorCodeStrategies[error.errorCode as keyof typeof errorCodeStrategies];
            if (defaultStrategy) {
                executeStrategy(error, defaultStrategy as ErrorHandlerStrategy<TFormData>, {
                    setError,
                    navigate: customNavigate || navigate,
                    onCustom,
                    notifiers,
                });
                return;
            }

            handleByStatusCode(error, notifiers);
        },
        [
            setError,
            navigate,
            customNavigate,
            onCustom,
            onViolations,
            customStrategies,
            errorNotify,
            warningNotify,
            successNotify,
            infoNotify,
        ],
    );
};

function executeStrategy<TFormData extends FieldValues>(
    error: ProblemDetail,
    strategy: ErrorHandlerStrategy<TFormData>,
    handlers: {
        setError?: UseFormSetError<TFormData>;
        navigate: (path: string) => void;
        onCustom?: (error: ProblemDetail) => void;
        notifiers: {
            error: (m: string) => void;
            warning: (m: string) => void;
            success: (m: string) => void;
            info: (m: string) => void;
        };
    },
) {
    const { notifiers } = handlers;

    switch (strategy.type) {
        case "toast": {
            const msg = strategy.message || error.detail || "Wystąpił błąd";
            const type = strategy.toastType || "error";
            (notifiers as any)[type](msg);
            break;
        }
        case "form":
            if (handlers.setError) {
                handlers.setError(strategy.field, { type: "server", message: strategy.message });
            } else {
                notifiers.error(strategy.message || error.detail || "Wystąpił błąd");
            }
            break;
        case "redirect":
            notifiers.info(error.detail || "Przekierowanie...");
            setTimeout(() => handlers.navigate(strategy.path), 1000);
            break;
        case "custom":
            strategy.handler(error);
            handlers.onCustom?.(error);
            break;
        case "ignore":
            break;
    }
}

function handleByStatusCode(
    error: ProblemDetail,
    notifiers: {
        error: (m: string) => void;
        warning: (m: string) => void;
        success: (m: string) => void;
        info: (m: string) => void;
    },
) {
    const status = error.status ?? 500;
    if (status >= 500) notifiers.error("Błąd serwera. Spróbuj ponownie później.");
    else if (status === 404) notifiers.warning("Nie znaleziono zasobu");
    else if (status === 403) notifiers.warning("Brak uprawnień");
    else if (status === 401) notifiers.info("Wymagane logowanie");
    else notifiers.error(error.detail || "Wystąpił błąd");
}

function isProblemDetail(error: unknown): error is ProblemDetail {
    return typeof error === "object" && error !== null && "errorCode" in error;
}

function hasViolations(e: ProblemDetail): e is ProblemDetail & { violations: Violation[] } {
    return Array.isArray((e as any).violations);
}
