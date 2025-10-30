import { buildGuardTypes } from "@app/guard/sessionBuilder.ts";
import type { GuardTypes } from "@app/guard/types.ts";
import { queryClient } from "@shared/libs/query.ts";

export const sessionKeys = { summary: () => ["session", "summary"] as const };

export const guestSession: GuardTypes = {
    isAuthenticated: false,
    hasCharacter: false,
    userId: null,
    characterId: null,
};

export function ensureSessionSummary(opts: { force?: boolean } = {}) {
    const options = {
        queryKey: sessionKeys.summary(),
        queryFn: () => buildGuardTypes(),
        gcTime: 5 * 60_000,
    } as const;

    return opts.force
        ? queryClient.fetchQuery<GuardTypes>(options)
        : queryClient.ensureQueryData<GuardTypes>({ ...options, staleTime: 60_000 });
}

export function setAuthSessionOptimistic() {
    queryClient.setQueryData(sessionKeys.summary(), (prev: any) => ({
        ...(prev ?? {}),
        isAuthenticated: true,
    }));
}

export function setGuestSession() {
    queryClient.setQueryData(sessionKeys.summary(), guestSession);
}
