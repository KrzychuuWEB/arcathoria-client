import { useForm } from "react-hook-form";
import InputField from "@shared/components/InputField.tsx";
import { Lock, LogIn, Mail } from "lucide-react";
import Button from "@shared/components/Button.tsx";
import { useNavigate } from "react-router-dom";
import useNotification from "@shared/hooks/useNotification.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { type RegisterFormData, registerSchema, toRegisterDTO, } from "@shared/validations/schema/account/register.ts";
import { useRegisterRequest } from "@api/orval.ts";
import { routes } from "@app/routes.ts";
import { useApiErrorHandler } from "@api/errors/useApiErrorHandler.ts";

const RegisterForm = () => {
    const navigate = useNavigate();
    const { successNotify } = useNotification();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: { email: "", password: "", confirmPassword: "" },
    });

    const handleApiError = useApiErrorHandler<RegisterFormData>({
        setError,
        onViolations: () => null,
    });

    const registerMutation = useRegisterRequest({
        mutation: {
            onSuccess: () => {
                successNotify("Konto zostało zarejestrowane");
                navigate(routes.account.login);
            },
            onError: (error) => handleApiError(error),
        },
    });

    const onSubmit = handleSubmit((formData) => {
        registerMutation.mutate({ data: toRegisterDTO(formData) });
    });

    const isLoading = registerMutation.isPending;

    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <InputField
                label="Email"
                type="text"
                placeholder="Twój email"
                icon={<Mail size={18} />}
                {...register("email")}
                error={errors.email?.message}
                disabled={isLoading}
            />
            <InputField
                label="Hasło"
                type="password"
                placeholder="Twoje hasło"
                icon={<Lock size={18} />}
                {...register("password")}
                error={errors.password?.message}
                disabled={isLoading}
            />
            <InputField
                label="Powtórz hasło"
                type="password"
                placeholder="Powtórz hasło"
                icon={<Lock size={18} />}
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
                disabled={isLoading}
            />

            <Button
                type="submit"
                icon={<LogIn size={18} />}
                disabled={isLoading}
                loading={isLoading}
            >
                Zarejestruj się
            </Button>
        </form>
    );
};

export default RegisterForm;
