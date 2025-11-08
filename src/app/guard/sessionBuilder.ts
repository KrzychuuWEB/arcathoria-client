import {
    getGetActiveCombatByParticipantIdQueryOptions,
    getGetSelectedCharacterQueryOptions,
    getMyAccountQueryOptions,
} from "@api/orval";
import type { GuardTypes } from "./types";
import { queryClient } from "@shared/libs/query.ts";

async function probeAuth(): Promise<Pick<GuardTypes, "isAuthenticated" | "userId">> {
    try {
        const me = await queryClient.fetchQuery(
            getMyAccountQueryOptions({
                query: { retry: false },
            }),
        );
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
        const char = await queryClient.fetchQuery(
            getGetSelectedCharacterQueryOptions({
                query: { retry: false },
            }),
        );
        return {
            hasCharacter: !!char,
            characterId: (char as any)?.id ?? (char as any)?.characterId ?? null,
        };
    } catch (e: any) {
        return { hasCharacter: false, characterId: null };
    }
}

async function probeActiveCombat(): Promise<
    Pick<GuardTypes, "hasActiveCombat" | "activeCombatId">
> {
    try {
        const combat = await queryClient.fetchQuery(
            getGetActiveCombatByParticipantIdQueryOptions({
                query: { retry: false },
            }),
        );
        return {
            hasActiveCombat: true,
            activeCombatId: combat.combatId,
        };
    } catch (e: any) {
        return { hasActiveCombat: false, activeCombatId: null };
    }
}

export async function buildGuardTypes(): Promise<GuardTypes> {
    const auth = await probeAuth();

    if (!auth.isAuthenticated) {
        return {
            isAuthenticated: false,
            hasCharacter: false,
            hasActiveCombat: false,
            userId: null,
            characterId: null,
            activeCombatId: null,
        };
    }

    const char = await probeCharacter();
    const combat = await probeActiveCombat();

    return {
        isAuthenticated: true,
        userId: auth.userId,
        hasCharacter: char.hasCharacter,
        characterId: char.characterId,
        hasActiveCombat: combat.hasActiveCombat,
        activeCombatId: combat.activeCombatId,
    };
}
