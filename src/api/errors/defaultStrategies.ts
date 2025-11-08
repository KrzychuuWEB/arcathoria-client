import type { ErrorHandlerStrategy } from "@api/errors/errorHandlerStrategy.ts";
import type { ToastType } from "@shared/libs/toastify/toastType.ts";

export const ToastStrategy = (message: string, toastType: ToastType): ErrorHandlerStrategy => ({
    type: "toast",
    message: message,
    toastType: toastType,
});

export const FormStrategy = <T extends string>(
    field: T,
    message: string,
): ErrorHandlerStrategy => ({
    type: "form",
    field: field as any,
    message: message,
});

export const RedirectStrategy = (path: string): ErrorHandlerStrategy => ({
    type: "redirect",
    path: path,
});

export const IgnoreStrategy = (): ErrorHandlerStrategy => ({
    type: "ignore",
});
