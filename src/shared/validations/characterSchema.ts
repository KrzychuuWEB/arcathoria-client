import { z } from "zod";
import { characterNameField } from "@shared/validations/fields.ts";

export const characterSchema = z.object({
    characterName: characterNameField,
});
