import type { Policy } from "@app/guard/types.ts";

export const all =
    (...ps: Policy[]): Policy =>
    (s) => {
        for (const p of ps) {
            const d = p(s);
            if (d !== true) return d;
        }
        return true;
    };

export const not =
    (p: Policy, redirect: string, message?: string): Policy =>
    (s) => {
        const result = p(s);
        return result === true ? { redirect, message } : true;
    };
