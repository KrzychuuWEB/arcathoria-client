import * as Yup from "yup";
import {emailRule, passwordRule, repeatPasswordRule} from "./validations.js";

export const registerValidationSchema = Yup.object().shape({
    email: emailRule,
    password: passwordRule,
    repeatPassword: repeatPasswordRule,
});