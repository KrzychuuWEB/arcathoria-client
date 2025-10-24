import { useListCharacters } from "@api/orval.ts";
import { mapCharacterDto } from "@domain/character/mapper.ts";

export const characterKeys = {
    all: ["characters"] as const,
};

export function useCharacters() {
    return useListCharacters({
        query: {
            queryKey: characterKeys.all,
            select: (dtos) => dtos.map(mapCharacterDto),
            staleTime: 30_000,
            gcTime: 5 * 60_000,
            retry: 1,
        },
    });
}

export function useCharacterCount() {
    return useListCharacters({
        query: {
            queryKey: characterKeys.all,
            select: (dtos) => dtos.length,
            staleTime: 30_000,
            gcTime: 5 * 60_000,
            retry: 1,
        },
    });
}
