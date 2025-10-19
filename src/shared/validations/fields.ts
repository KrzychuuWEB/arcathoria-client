import { z } from "zod";

export const emailField = z
    .string()
    .min(1, "Email jest wymagany")
    .email("Nieprawidłowy adres email");

export const passwordField = z
    .string()
    .min(8, "Hasło musi mieć min. 8 znaków")
    .max(32, "Hasło może mieć maksymalnie 32 znaki");

export const characterNameField = z
    .string()
    .min(3, "Imię powinno mieć min. 3 znaki")
    .max(20, "Imię może mieć maks. 20 znaków")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/, "Dozwolone: litery, spacje, apostrof, myślnik");
