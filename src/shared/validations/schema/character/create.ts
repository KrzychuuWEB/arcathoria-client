import { z } from "zod";
import { characterNameField } from "@shared/validations/fields.ts";
import type { CreateCharacterDTO } from "@api/orval.schemas.ts";

export const createCharacterSchema = z.object({
    characterName: characterNameField,
});

export type CreateCharacterFormData = z.infer<typeof createCharacterSchema>;

export function toCreateCharacterDTO(form: CreateCharacterFormData): CreateCharacterDTO {
    return { characterName: form.characterName };
}
