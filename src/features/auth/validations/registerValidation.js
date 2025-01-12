import * as Yup from "yup";
import {emailRule, passwordRule, repeatPasswordRule, usernameRule} from "./validations.js";

export const registerValidationSchema = Yup.object().shape({
    email: emailRule,
    password: passwordRule,
    repeatPassword: repeatPasswordRule,
    username: usernameRule
});