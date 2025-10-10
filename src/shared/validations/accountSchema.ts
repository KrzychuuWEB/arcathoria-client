import { z } from "zod";
import { emailField, passwordField } from "./fields";

export const loginSchema = z.object({
    email: emailField,
    password: passwordField,
});

export const registerSchema = z
    .object({
        email: emailField,
        password: passwordField,
        confirmPassword: z.string().min(1, "Potwierdź hasło"),
    })
    .superRefine((data, ctx) => {
        if (data.confirmPassword !== data.password) {
            ctx.addIssue({
                code: "custom",
                path: ["confirmPassword"],
                message: "Hasła muszą być takie same",
            });
        }
    });
