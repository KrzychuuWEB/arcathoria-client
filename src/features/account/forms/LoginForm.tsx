import InputField from "@shared/components/InputField.tsx";
import { Lock, LogIn, Mail } from "lucide-react";
import Button from "@shared/components/Button.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@shared/validations/accountSchema.ts";
import { z } from "zod";
import useNotification from "@shared/hooks/useNotification.ts";
import { useNavigate } from "react-router-dom";
import { routes } from "@app/routes.ts";

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
    const navigate = useNavigate();
    const { successNotify } = useNotification();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormData) => {
        console.log("Dane logowania:", data);
        successNotify("Runy rozpoznały Twoje Imię. Witaj w Wieży!");
        navigate(routes.character.list);
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
            <Button type="submit" icon={<LogIn size={18} />} disabled={isSubmitting}>
                Zaloguj się
            </Button>
        </form>
    );
};

export default LoginForm;
