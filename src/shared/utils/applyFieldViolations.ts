import type { FieldPath, FieldValues, UseFormSetError } from "react-hook-form";
import { VALIDATION_DATA_ERROR_CODE } from "@api/apiErrorsCode.ts";

export type Violation = {
    field: string;
    message: string;
};

export type ApiErrorBody = {
    errorCode: string;
    violations?: Violation[];
};

export function applyFieldViolations<TFieldValues extends FieldValues>(
    payload: ApiErrorBody | undefined,
    setError: UseFormSetError<TFieldValues>,
): void {
    if (!payload || payload.errorCode !== VALIDATION_DATA_ERROR_CODE || !payload.violations) {
        return;
    }

    payload.violations.forEach(({ field, message }) => {
        setError(field as FieldPath<TFieldValues>, {
            type: "server",
            message,
        });
    });
}
