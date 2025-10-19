import { useForm } from "react-hook-form";
import InputField from "@shared/components/InputField.tsx";
import { Lock, LogIn, Mail } from "lucide-react";
import Button from "@shared/components/Button.tsx";
import { useNavigate } from "react-router-dom";
import { routes } from "@app/routes.ts";
import useNotification from "@shared/hooks/useNotification.ts";
import {
    RegisterFormSchema,
    type RegisterFormType,
    toRegisterDTO,
} from "@features/account/forms/registerFormSchema.ts";
import { useRegisterRequest } from "@api/orval.ts";
import { applyFieldViolations } from "@shared/utils/applyFieldViolations.ts";
import { isAxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterForm = () => {
    const navigate = useNavigate();
    const { successNotify } = useNotification();
    const registerMutation = useRegisterRequest();

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormType>({
        resolver: zodResolver(RegisterFormSchema),
        defaultValues: { email: "", password: "", confirmPassword: "" },
    });

    const onSubmit = async (formData: RegisterFormType) => {
        try {
            const dto = toRegisterDTO(formData);
            await registerMutation.mutateAsync({
                data: dto,
            });

            successNotify("Konto zostało zarejestrowane");
            navigate(routes.account.login);
        } catch (error) {
            if (isAxiosError(error)) {
                applyFieldViolations<RegisterFormType>(error.response?.data, setError);
            }
        }
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
                disabled={isSubmitting || registerMutation.isPending}
            />
            <InputField
                label="Hasło"
                type="password"
                placeholder="Twoje hasło"
                icon={<Lock size={18} />}
                {...register("password")}
                error={errors.password?.message}
                disabled={isSubmitting || registerMutation.isPending}
            />

            <InputField
                label="Powtórz hasło"
                type="password"
                placeholder="Powtórz hasło"
                icon={<Lock size={18} />}
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
                disabled={isSubmitting || registerMutation.isPending}
            />

            <Button
                type="submit"
                icon={<LogIn size={18} />}
                disabled={isSubmitting || registerMutation.isPending}
                loading={registerMutation.isPending}
            >
                Zarejestruj sie
            </Button>
        </form>
    );
};

export default RegisterForm;
