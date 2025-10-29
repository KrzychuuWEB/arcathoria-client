import { ensureSessionSummary } from "@app/guard/query.ts";

export const bootstrapLoader = () => async () => {
    return await ensureSessionSummary().catch(() => ({
        isAuthenticated: false,
        hasCharacter: false,
        inBattle: false,
        userId: null,
        characterId: null,
    }));
};
