import * as Yup from "yup";

export const usernameRules = Yup.string()
    .min(3, 'Nazwa użytkownika musi mieć co najmniej 3 znaki.')
    .max(16, 'Nazwa użytkownika może mieć maksymalnie 16 znaków.')
    .matches(/^[a-zA-Z0-9_-]+$/, 'Nazwa użytkownika może zawierać tylko litery, cyfry, myślniki i podkreślenia.')
    .required('Nazwa użytkownika jest wymagana.');

export const emailRules = Yup.string()
    .email('Wprowadź poprawny adres e-mail.')
    .required('Adres e-mail jest wymagany.');

export const passwordRules = Yup.string()
    .min(8, 'Hasło musi mieć co najmniej 8 znaków.')
    .matches(/[A-Z]/, 'Hasło musi zawierać co najmniej jedną wielką literę.')
    .matches(/[a-z]/, 'Hasło musi zawierać co najmniej jedną małą literę.')
    .matches(/[0-9]/, 'Hasło musi zawierać co najmniej jedną cyfrę.')
    .matches(/[@$!%*?&]/, 'Hasło musi zawierać co najmniej jeden znak specjalny (@, $, !, %, *, ?, &).')
    .required('Hasło jest wymagane.');

export const repeatPasswordRules = Yup.string()
    .oneOf([Yup.ref('password'), null], 'Hasła muszą być identyczne.')
    .required('Potwierdzenie hasła jest wymagane.');