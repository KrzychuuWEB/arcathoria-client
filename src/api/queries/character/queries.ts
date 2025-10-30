import { getGetSelectedCharacterQueryOptions, getListCharactersQueryOptions } from "@api/orval.ts";
import { mapCharacterDto } from "@domain/character/mapper.ts";
import { makeQuery } from "@api/queries/makeQuery.ts";

export const [useCharacters] = makeQuery(() =>
    getListCharactersQueryOptions({
        query: { select: (dtos) => dtos.map(mapCharacterDto), refetchOnMount: "always" },
    }),
);

export const [useCharacterCount] = makeQuery(() =>
    getListCharactersQueryOptions({
        query: { select: (dtos) => dtos.length, refetchOnMount: "always" },
    }),
);

export const [useSelectedCharacter] = makeQuery(() =>
    getGetSelectedCharacterQueryOptions({ query: { select: mapCharacterDto } }),
);
