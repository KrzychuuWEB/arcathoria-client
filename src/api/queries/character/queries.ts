import { useListCharacters } from "@api/orval.ts";
import { mapCharacterDto } from "@domain/character/mapper.ts";
import { makeQuery } from "@api/queries/makeQuery.ts";

export const [useCharacters] = makeQuery(() =>
    useListCharacters({ query: { select: (dtos) => dtos.map(mapCharacterDto) } }),
);

export const [useCharacterCount] = makeQuery(() =>
    useListCharacters({ query: { select: (dtos) => dtos.length } }),
);
