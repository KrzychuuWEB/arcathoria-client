import { all, not } from "@app/guard/policy.ts";
import { requireAuth, requireCharacter } from "@app/guard/policies.ts";
import { routes } from "@app/routes.ts";
import type { Policy } from "@app/guard/types.ts";

export const onlyForGuest: Policy = (g) => {
    if (!g.isAuthenticated) return true;

    const redirectPath = g.hasCharacter ? routes.dashboard.base : routes.character.base;
    return {
        redirect: redirectPath,
    };
};
export const onlyForAccount = all(requireAuth, not(requireCharacter, routes.dashboard.base));
export const onlyAccountAndCharacter = all(requireAuth, requireCharacter);
