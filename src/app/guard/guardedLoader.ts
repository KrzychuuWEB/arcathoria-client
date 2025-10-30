import { redirect } from "react-router-dom";
import { ensureSessionSummary } from "./query";
import type { GuardTypes, Policy } from "./types";

export const guardedLoader = (policy: Policy) => async () => {
    let s: GuardTypes;
    try {
        s = await ensureSessionSummary();
    } catch {
        s = { isAuthenticated: false, hasCharacter: false, userId: null, characterId: null };
    }
    const d = policy(s);
    if (d === true) return s;
    throw redirect(d);
};
