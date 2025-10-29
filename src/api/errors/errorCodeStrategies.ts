import type { ApiErrorCodes } from "@api/errors/apiErrorCodes.ts";
import type { ErrorHandlerStrategy } from "@api/errors/errorHandlerStrategy.ts";
import { FormStrategy, RedirectStrategy, ToastStrategy } from "@api/errors/defaultStrategies.ts";
import { routes } from "@app/routes.ts";

export const errorCodeStrategies: Record<ApiErrorCodes, ErrorHandlerStrategy> = {
    ERR_ACCOUNT_EMAIL_EXISTS: FormStrategy("email", "Ten adres email jest już zajęty"),
    ERR_ACCOUNT_BAD_CREDENTIALS: FormStrategy("password", "Email lub hasło jest nieprawidłowe!"),
    ERR_ACCOUNT_NOT_FOUND: ToastStrategy("Konto nie zostało znalezione", "warning"),

    ERR_AUTH_BAD_CREDENTIALS: FormStrategy("password", "Błędy login lub hasło!"),
    ERR_AUTH_EXPIRED_TOKEN: RedirectStrategy(routes.account.login),
    ERR_EXTERNAL_SERVICE_UNAVAILABLE: ToastStrategy("Wymagany serwis jest niedostępny!", "error"),

    ERR_CHARACTER_NAME_EXISTS: FormStrategy("name", "Ta nazwa postaci jest już zajęta!"),
    ERR_CHARACTER_NOT_FOUND: ToastStrategy("Postać nie istnieje!", "warning"),
    ERR_CHARACTER_NOT_OWNED: ToastStrategy("Konto nie zostało znalezione", "error"),
    ERR_CHARACTER_NOT_SELECTED: RedirectStrategy(routes.character.list),
    ERR_CHARACTER_OWNER_NOT_FOUND: ToastStrategy("Nie jesteś właścicielem tej postaci", "error"),
    ERR_SERVICE_UNAVAILABLE: ToastStrategy("Bład po stronie serwera!", "error"),
};
