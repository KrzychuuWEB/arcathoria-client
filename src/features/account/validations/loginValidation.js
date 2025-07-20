import * as Yup from "yup";
import { emailRule, passwordRule } from "./validations.js";

export const loginValidationSchema = Yup.object().shape({
    email: emailRule,
    password: passwordRule,
});
