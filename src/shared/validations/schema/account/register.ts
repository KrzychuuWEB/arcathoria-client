import { emailField, passwordField } from "@shared/validations/fields.ts";
import type { RegisterDTO } from "@api/orval.schemas.ts";
import { z } from "zod";

export const registerSchema = z
    .object({
        email: emailField,
        password: passwordField,
        confirmPassword: z.string().min(1, "Potwierdź hasło"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Hasła muiszą być takie same",
        path: ["confirmPassword"],
    });

export type RegisterFormData = z.infer<typeof registerSchema>;

export function toRegisterDTO(form: RegisterFormData): RegisterDTO {
    return { email: form.email, password: form.password };
}
