import type { RegisterDTO } from "@/api/orval.schemas";
import { z } from "zod";
import { registerRequestBody } from "@api/schemas.ts";

export const RegisterFormSchema = registerRequestBody
    .extend({
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Hasła muiszą być takie same",
        path: ["confirmPassword"],
    });

export type RegisterFormType = z.infer<typeof RegisterFormSchema>;

export function toRegisterDTO(form: RegisterFormType): RegisterDTO {
    return { email: form.email, password: form.password };
}
