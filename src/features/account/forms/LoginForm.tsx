import InputField from "@shared/components/InputField.tsx";
import { Lock, LogIn, Mail } from "lucide-react";
import Button from "@shared/components/Button.tsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useNotification from "@shared/hooks/useNotification.ts";
import { useNavigate } from "react-router-dom";
import {
    type LoginFormData,
    loginSchema,
    toAuthRequestDTO,
} from "@shared/validations/schema/account/login.ts";
import { useApiErrorHandler } from "@api/errors/useApiErrorHandler.ts";
import { routes } from "@app/routes.ts";
import { useLogin } from "@api/orval.ts";

const LoginForm = () => {
    const navigate = useNavigate();
    const { successNotify } = useNotification();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const handleApiError = useApiErrorHandler<LoginFormData>({
        setError,
        onViolations: () => null,
    });

    const loginMutation = useLogin({
        mutation: {
            onSuccess: () => {
                successNotify("Logowanie udane");
                navigate(routes.character.list);
            },
            onError: (error) => handleApiError(error),
        },
    });

    const onSubmit = handleSubmit((formData) => {
        loginMutation.mutate({ data: toAuthRequestDTO(formData) });
    });

    const isLoading = loginMutation.isPending;

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
            <Button
                type="submit"
                icon={<LogIn size={18} />}
                disabled={isLoading}
                loading={isLoading}
            >
                Zaloguj się
            </Button>
        </form>
    );
};

export default LoginForm;
