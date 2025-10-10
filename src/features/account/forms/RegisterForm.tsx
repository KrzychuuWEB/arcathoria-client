import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@shared/validations/accountSchema.ts";
import InputField from "@shared/components/InputField.tsx";
import { Lock, LogIn, Mail } from "lucide-react";
import Button from "@shared/components/Button.tsx";
import { z } from "zod";

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = (data: RegisterFormData) => {
        console.log("Dane logowania:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputField
                label="Email"
                type="text"
                placeholder="Twój email"
                icon={<Mail size={18} />}
                {...register("email", {
                    required: "Email jest wymagany",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Nieprawidłowy adres email",
                    },
                })}
                error={errors.email?.message}
            />
            <InputField
                label="Hasło"
                type="password"
                placeholder="Twoje hasło"
                icon={<Lock size={18} />}
                {...register("password", {
                    required: "Hasło jest wymagane",
                    minLength: {
                        value: 6,
                        message: "Hasło musi mieć min. 6 znaków",
                    },
                })}
                error={errors.password?.message}
            />

            <InputField
                label="Hasło"
                type="password"
                placeholder="Powtórz hasło"
                icon={<Lock size={18} />}
                {...register("confirmPassword", {
                    required: "Hasło jest wymagane",
                    minLength: {
                        value: 6,
                        message: "Hasło musi mieć min. 6 znaków",
                    },
                })}
                error={errors.confirmPassword?.message}
            />

            <Button type="submit" icon={<LogIn size={18} />} disabled={isSubmitting}>
                Zarejestruj sie
            </Button>
        </form>
    );
};

export default RegisterForm;
