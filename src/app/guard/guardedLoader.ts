import { redirect } from "react-router-dom";
import { ensureSessionSummary } from "./query";
import type { GuardTypes, Policy } from "./types";
import { toast } from "react-toastify";

export const guardedLoader = (policy: Policy) => async () => {
    let s: GuardTypes;
    try {
        s = await ensureSessionSummary();
    } catch {
        s = {
            isAuthenticated: false,
            hasCharacter: false,
            userId: null,
            characterId: null,
            activeCombatId: null,
        };
    }
    const d = policy(s);
    if (d === true) return s;

    if (typeof d === "object" && d.message) {
        toast.info(d.message);
    }

    throw redirect(d.redirect);
};
