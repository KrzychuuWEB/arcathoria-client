import { routes } from "@app/routes.ts";
import type { Policy } from "@app/guard/types.ts";

export const requireAuth: Policy = (g) => (g.isAuthenticated ? true : routes.account.login);
export const requireCharacter: Policy = (g) => (g.hasCharacter ? true : routes.dashboard.base);
