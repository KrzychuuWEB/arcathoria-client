import * as Yup from "yup";
import { emailRule } from "./validations.js";

export const recoveryPasswordSchema = Yup.object().shape({
    email: emailRule,
});
