import { getGetSelectedCharacterQueryOptions } from "@api/orval";
import type { GuardTypes } from "./types";
import { queryClient } from "@shared/libs/query.ts";
import { ensureAccount } from "@api/queries/account/queries.ts";

async function probeAuth(): Promise<Pick<GuardTypes, "isAuthenticated" | "userId">> {
    try {
        const me = await ensureAccount(queryClient);
        return {
            isAuthenticated: true,
            userId: me.id,
        };
    } catch (e: any) {
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
