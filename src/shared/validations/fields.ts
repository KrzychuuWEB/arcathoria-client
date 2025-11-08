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
    .min(3, { message: "Nazwa musi mieć co najmniej 3 znaki." })
    .max(20, { message: "Nazwa może mieć maksymalnie 20 znaków." })
    .regex(/^[A-Za-z0-9_-]+$/, {
        message: "Dozwolone są tylko litery A–Z, cyfry 0–9, podkreślenie (_) i myślnik (-).",
    });
