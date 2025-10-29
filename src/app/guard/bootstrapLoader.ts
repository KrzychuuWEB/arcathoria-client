import { ensureSessionSummary } from "@app/guard/query.ts";

export const bootstrapLoader = () => async () => {
    const session = await ensureSessionSummary().catch(() => ({
        isAuthenticated: false,
        hasCharacter: false,
        inBattle: false,
        userId: null,
        characterId: null,
    }));
    return session;
};
