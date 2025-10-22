import type { ApiErrorCodes } from "@api/errors/apiErrorCodes.ts";
import type { ErrorHandlerStrategy } from "@api/errors/errorHandlerStrategy.ts";
import { FormStrategy, ToastStrategy } from "@api/errors/defaultStrategies.ts";

export const errorCodeStrategies: Record<ApiErrorCodes, ErrorHandlerStrategy> = {
    ERR_ACCOUNT_EMAIL_EXISTS: FormStrategy("email", "Ten adres email jest już zajęty"),
    ERR_ACCOUNT_BAD_CREDENTIALS: FormStrategy("password", "Email lub hasło jest nieprawidłowe!"),
    ERR_ACCOUNT_NOT_FOUND: ToastStrategy("Konto nie zostało znalezione", "error"),
};
