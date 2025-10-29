export type GuardTypes = {
    isAuthenticated: boolean;
    hasCharacter: boolean;
    userId?: string | null;
    characterId?: string | null;
};

export type Decision = true | string;
export type Policy = (types: GuardTypes) => Decision;
