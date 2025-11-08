export type GuardTypes = {
    isAuthenticated: boolean;
    hasCharacter: boolean;
    hasActiveCombat: boolean;
    userId: string | null;
    characterId: string | null;
    activeCombatId: string | null;
};

export type Decision = true | { redirect: string; message?: string };
export type Policy = (types: GuardTypes) => Decision;
