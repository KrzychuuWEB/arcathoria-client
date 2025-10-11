import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@shared/validations/accountSchema.ts";
import InputField from "@shared/components/InputField.tsx";
import { Lock, LogIn, Mail } from "lucide-react";
import Button from "@shared/components/Button.tsx";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { routes } from "@app/routes.ts";

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = (data: RegisterFormData) => {
        console.log("Dane logowania:", data);
        navigate(routes.account.login);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputField
                label="Email"
                type="text"
                placeholder="Twój email"
                icon={<Mail size={18} />}
                {...register("email")}
                error={errors.email?.message}
            />
            <InputField
                label="Hasło"
                type="password"
                placeholder="Twoje hasło"
                icon={<Lock size={18} />}
                {...register("password")}
                error={errors.password?.message}
            />

            <InputField
                label="Hasło"
                type="password"
                placeholder="Powtórz hasło"
                icon={<Lock size={18} />}
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
            />

            <Button type="submit" icon={<LogIn size={18} />} disabled={isSubmitting}>
                Zarejestruj sie
            </Button>
        </form>
    );
};

export default RegisterForm;
