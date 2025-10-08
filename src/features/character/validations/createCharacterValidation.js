import * as Yup from "yup";
import { characterNameRule } from "./validations.js";

export const createCharacterSchema = Yup.object().shape({
    characterName: characterNameRule,
});
