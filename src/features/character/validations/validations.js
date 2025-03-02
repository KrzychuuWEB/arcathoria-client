import * as Yup from "yup";

export const characterNameRule = Yup.string()
    .trim()
    .strict(true)
    .min(3, "Nazwa postaci musi mieć co najmniej 3 znaki.")
    .max(20, "Nazwa postaci może mieć maksymalnie 20 znaków.")
    .matches(
        /^[a-zA-Z0-9_-]+$/,
        "Nazwa może zawierać tylko litery, cyfry, myślnik (-) i podkreślenie (_).",
    )
    .required("Nazwa postaci jest wymagana.");
