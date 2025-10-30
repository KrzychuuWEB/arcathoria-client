import { getGetSelectedCharacterQueryOptions, getMyAccountQueryOptions } from "@api/orval";
import type { GuardTypes } from "./types";
import { queryClient } from "@shared/libs/query.ts";

const is401 = (e: any) => e?.status === 401;
const is404 = (e: any) => e?.status === 404;
const isNoCharacter = (e: any) => e?.errorCode === "ERR_CHARACTER_NOT_SELECTED" || is404(e);

async function probeAuth(): Promise<Pick<GuardTypes, "isAuthenticated" | "userId">> {
    try {
        const me = await queryClient.fetchQuery(getMyAccountQueryOptions());
        return {
            isAuthenticated: true,
            userId: (me as any)?.id ?? (me as any)?.userId ?? null,
        };
    } catch (e: any) {
        if (is401(e)) {
            return { isAuthenticated: false, userId: null };
        }
        return { isAuthenticated: false, userId: null };
    }
}

async function probeCharacter(): Promise<Pick<GuardTypes, "hasCharacter" | "characterId">> {
    try {
        const char = await queryClient.fetchQuery(getGetSelectedCharacterQueryOptions());
        return {
            hasCharacter: !!char,
            characterId: (char as any)?.id ?? (char as any)?.characterId ?? null,
        };
    } catch (e: any) {
        if (isNoCharacter(e)) {
            return { hasCharacter: false, characterId: null };
        }
        return { hasCharacter: false, characterId: null };
    }
}

export async function buildGuardTypes(): Promise<GuardTypes> {
    const auth = await probeAuth();

    if (!auth.isAuthenticated) {
        return {
            isAuthenticated: false,
            hasCharacter: false,
            userId: null,
            characterId: null,
        };
    }

    const char = await probeCharacter();

    return {
        isAuthenticated: true,
        userId: auth.userId,
        hasCharacter: char.hasCharacter,
        characterId: char.characterId,
    };
}
