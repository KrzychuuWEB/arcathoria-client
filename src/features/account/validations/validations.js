import * as Yup from "yup";

export const emailRule = Yup.string()
    .email('Wprowadź poprawny adres e-mail.')
    .required('Adres e-mail jest wymagany.');

export const passwordRule = Yup.string()
    .min(8, 'Hasło musi mieć co najmniej 8 znaków.')
    .matches(/[A-Z]/, 'Hasło musi zawierać co najmniej jedną wielką literę.')
    .matches(/[a-z]/, 'Hasło musi zawierać co najmniej jedną małą literę.')
    .matches(/[0-9]/, 'Hasło musi zawierać co najmniej jedną cyfrę.')
    .matches(/[@$!%*?&]/, 'Hasło musi zawierać co najmniej jeden znak specjalny (@, $, !, %, *, ?, &).')
    .required('Hasło jest wymagane.');

export const repeatPasswordRule = Yup.string()
    .oneOf([Yup.ref('password'), null], 'Hasła muszą być identyczne.')
    .required('Potwierdzenie hasła jest wymagane.');