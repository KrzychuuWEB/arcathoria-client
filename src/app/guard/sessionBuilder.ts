import type { GuardTypes } from "./types";
import { getGetSelectedCharacterQueryOptions, getMyAccountQueryOptions } from "@api/orval";
import { guestSession } from "@app/guard/query.ts";
import { queryClient } from "@shared/libs/query.ts";

const is401 = (e: any) => e?.status === 401;
const is404 = (e: any) => e?.status === 404;
const isNoCharacter = (e: any) => e?.errorCode === "ERR_CHARACTER_NOT_SELECTED" || is404(e);

export async function buildGuardTypes(): Promise<GuardTypes> {
    const meOpts = getMyAccountQueryOptions();
    const charOpts = getGetSelectedCharacterQueryOptions();

    const [meR, charR] = await Promise.allSettled([
        queryClient.fetchQuery(meOpts),
        queryClient.fetchQuery(charOpts),
    ]);

    if (meR.status === "rejected" && is401(meR.reason)) {
        return { ...guestSession, isAuthenticated: false };
    }
    if (meR.status === "fulfilled") {
        guestSession.userId = (meR.value as any)?.id ?? (meR.value as any)?.userId ?? null;
    }

    if (charR.status === "fulfilled" && charR.value) {
        guestSession.hasCharacter = true;
        guestSession.characterId =
            (charR.value as any)?.id ?? (charR.value as any)?.characterId ?? null;
    } else if (charR.status === "rejected") {
        if (is401(charR.reason)) {
            return {
                isAuthenticated: false,
                hasCharacter: false,
                userId: null,
                characterId: null,
            };
        }
        if (isNoCharacter(charR.reason)) {
            guestSession.hasCharacter = false;
            guestSession.characterId = null;
        }
    }

    return guestSession;
}
