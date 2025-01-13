import * as Yup from "yup";
import {passwordRule, repeatPasswordRule} from "./validations.js";

export const resetPasswordValidation = Yup.object().shape({
    password: passwordRule,
    repeatPassword: repeatPasswordRule,
});