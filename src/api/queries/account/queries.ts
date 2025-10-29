import { useMyAccount } from "@api/orval.ts";
import { mapAccountDTO } from "@domain/account/mapper.ts";

export const characterKeys = {
    me: ["account"] as const,
};

export function useAccount() {
    return useMyAccount({
        query: {
            queryKey: characterKeys.me,
            select: (dto) => mapAccountDTO(dto),
            staleTime: 30_000,
            gcTime: 5 * 60_000,
            retry: 1,
        },
    });
}
