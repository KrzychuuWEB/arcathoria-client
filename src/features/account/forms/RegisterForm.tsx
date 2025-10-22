import { useForm } from "react-hook-form";
import InputField from "@shared/components/InputField.tsx";
import { Lock, LogIn, Mail } from "lucide-react";
import Button from "@shared/components/Button.tsx";
import { useNavigate } from "react-router-dom";
import { routes } from "@app/routes.ts";
import useNotification from "@shared/hooks/useNotification.ts";
import { useRegisterRequest } from "@api/orval.ts";
import { applyFieldViolations } from "@shared/utils/applyFieldViolations.ts";
import { isAxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    type RegisterFormData,
    registerSchema,
    toRegisterDTO,
} from "@shared/validations/schema/account/register.ts";

const RegisterForm = () => {
    const navigate = useNavigate();
    const { successNotify, errorNotify } = useNotification();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: { email: "", password: "", confirmPassword: "" },
    });

    const registerMutation = useRegisterRequest({
        mutation: {
            onSuccess: () => {
                successNotify("Konto zostało zarejestrowane");
                navigate(routes.account.login);
            },
            onError: (error) => {
                if (isAxiosError(error)) {
                    applyFieldViolations<RegisterFormData>(error.response?.data, setError);
                } else {
                    errorNotify("Nie udało się zarejestrować. Spróbuj ponownie.");
                }
            },
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
