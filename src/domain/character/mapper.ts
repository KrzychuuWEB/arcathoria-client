import type { Character } from "@domain/character/types.ts";
import type { CharacterDTO } from "@api/orval.schemas.ts";

export const mapCharacterDto = (dto: CharacterDTO): Character => ({
    id: dto.id ?? "",
    name: dto.characterName ?? "",
    avatar_url: "/default_avatar.png",
    hp: dto.health ?? 0,
    intelligence: dto.intelligence ?? 0,
    level: 1,
});
