import { z } from "zod";

export const emailField = z
    .string()
    .min(1, "Email jest wymagany")
    .email("Nieprawidłowy adres email");

export const passwordField = z.string().min(6, "Hasło musi mieć min. 6 znaków");

export const confirmPasswordField = (passwordRef: string) =>
    z.string().refine((val) => val === passwordRef, {
        message: "Hasła muszą być takie same",
    });
