import { buildGuardTypes } from "@app/guard/sessionBuilder.ts";
import type { GuardTypes } from "@app/guard/types.ts";
import { queryClient } from "@shared/libs/query.ts";

export const sessionKeys = { summary: () => ["session", "summary"] as const };

export const guestSession: GuardTypes = {
    isAuthenticated: false,
    hasCharacter: false,
    hasActiveCombat: false,
    userId: null,
    characterId: null,
    activeCombatId: null,
};

export function ensureSessionSummary() {
    return queryClient.ensureQueryData<GuardTypes>({
        queryKey: sessionKeys.summary(),
        queryFn: () => buildGuardTypes(),
    });
}

export function setAuthSessionOptimistic() {
    queryClient.setQueryData(sessionKeys.summary(), (prev: any) => ({
        ...(prev ?? {}),
        isAuthenticated: true,
    }));
}

export function setSelectCharacterSessionOptimistic() {
    queryClient.setQueryData(sessionKeys.summary(), (prev: any) => ({
        ...(prev ?? {}),
        hasCharacter: true,
    }));
}

export function setGuestSession() {
    queryClient.setQueryData(sessionKeys.summary(), guestSession);
}

export function setAuthSession() {
    queryClient.setQueryData(sessionKeys.summary(), (prev: any) => ({
        ...(prev ?? {}),
        hasCharacter: false,
        characterId: null,
    }));
}

export function setActiveCombatSession(id: string) {
    queryClient.setQueryData(sessionKeys.summary(), (prev: any) => ({
        ...(prev ?? {}),
        hasActiveCombat: true,
        activeCombatId: id,
    }));
}
