import type { FieldValues, Path, UseFormSetError } from "react-hook-form";
import type { ToastType } from "@shared/libs/toastify/toastType.ts";
import type { ProblemDetail } from "@api/errors/problemDetail.ts";

export type ErrorHandlerStrategy<TFormData extends FieldValues = FieldValues> =
    | { type: "toast"; message?: string; toastType?: ToastType }
    | { type: "form"; field: Path<TFormData>; message: string }
    | { type: "redirect"; path: string }
    | { type: "custom"; handler: (error: ProblemDetail) => void }
    | { type: "ignore" };

export interface ErrorHandlerConfig<TFormData extends FieldValues = FieldValues> {
    setError?: UseFormSetError<TFormData>;
    navigate?: (path: string) => void;
    onCustom?: (error: ProblemDetail) => void;
    onViolations?: (violations: ReadonlyArray<Violation>) => void;
}

export type Violation = Readonly<{
    field: string;
    message: string;
    code?: string;
    rejectedValue?: unknown;
}>;
