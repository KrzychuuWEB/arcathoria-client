import { emailField, passwordField } from "@shared/validations/fields.ts";
import { z } from "zod";
import type { AuthRequestDTO } from "@api/orval.schemas.ts";

export const loginSchema = z.object({
    email: emailField,
    password: passwordField,
});

export type LoginFormData = z.infer<typeof loginSchema>;

export function toAuthRequestDTO(form: LoginFormData): AuthRequestDTO {
    return { email: form.email, password: form.password };
}
