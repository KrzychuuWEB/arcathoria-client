import { routes } from "@app/routes.ts";
import type { Policy } from "@app/guard/types.ts";

export const requireAuth: Policy = (g) =>
    g.isAuthenticated ? true : { redirect: routes.account.login, message: "Musisz sie zalogować!" };
export const requireCharacter: Policy = (g) =>
    g.hasCharacter ? true : { redirect: routes.character.list, message: "Musisz wybrać postać!" };
export const requireActiveCombat: Policy = (g) =>
    g.hasActiveCombat ? true : { redirect: routes.dashboard.base, message: "Brak aktywnej walki" };
