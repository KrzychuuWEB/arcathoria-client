import { redirect } from "react-router-dom";
import type { GuardTypes, Policy } from "@app/guard/types.ts";
import { ensureSessionSummary } from "@app/guard/query.ts";

export const guardedLoader = (policy: Policy) => async () => {
    let s: GuardTypes;
    try {
        s = await ensureSessionSummary();
    } catch {
        s = { isAuthenticated: false, hasCharacter: false };
    }
    const d = policy(s);
    if (d === true) return s;
    throw redirect(d);
};
