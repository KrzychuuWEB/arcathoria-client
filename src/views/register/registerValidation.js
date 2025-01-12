import * as Yup from "yup";
import {emailRules, passwordRules, repeatPasswordRules, usernameRules} from "../../validation/validations.js";

export const registerValidationSchema = Yup.object().shape({
    email: emailRules,
    password: passwordRules,
    repeatPassword: repeatPasswordRules,
    username: usernameRules
});