import { all, not } from "@app/guard/policy.ts";
import { requireActiveCombat, requireAuth, requireCharacter } from "@app/guard/policies.ts";
import { routes } from "@app/routes.ts";
import type { Policy } from "@app/guard/types.ts";

export const onlyForGuest: Policy = (g) => {
    if (!g.isAuthenticated) return true;

    const redirectPath = g.hasCharacter ? routes.dashboard.base : routes.character.base;
    return {
        redirect: redirectPath,
    };
};

export const redirectIfHasActiveCombat: Policy = (g) => {
    if (g.hasActiveCombat && g.activeCombatId) {
        return { redirect: routes.combat.byId(g.activeCombatId) };
    }
    return true;
};

export const onlyForAccount = all(requireAuth, not(requireCharacter, routes.dashboard.base));
export const onlyAccountAndCharacter = all(
    requireAuth,
    requireCharacter,
    redirectIfHasActiveCombat,
);
export const onlyWithActiveCombat = all(requireAuth, requireCharacter, requireActiveCombat);
