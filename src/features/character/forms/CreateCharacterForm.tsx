import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { routes } from "@app/routes.ts";
import InputField from "@shared/components/InputField.tsx";
import { Sparkles, Wand2 } from "lucide-react";
import Button from "@shared/components/Button.tsx";
import { useEffect } from "react";
import {
    type CreateCharacterFormData,
    createCharacterSchema,
    toCreateCharacterDTO,
} from "@shared/validations/schema/character/create.ts";
import { useApiErrorHandler } from "@api/errors/useApiErrorHandler.ts";
import { useCreateCharacter } from "@api/orval.ts";
import { setAuthSessionOptimistic } from "@app/guard/query.ts";
import useNotification from "@shared/hooks/useNotification.ts";

type CharacterFormProps = {
    setCharacter: (data: CreateCharacterFormData) => void;
};

const CreateCharacterForm = ({ setCharacter }: CharacterFormProps) => {
    const navigate = useNavigate();
    const { successNotify } = useNotification();
    const {
        register,
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<CreateCharacterFormData>({
        resolver: zodResolver(createCharacterSchema),
    });

    const handleApiError = useApiErrorHandler<CreateCharacterFormData>({
        setError,
        onViolations: () => null,
    });
    const watchedName = useWatch({ control, name: "characterName" }) ?? "";

    const createCharacterMutation = useCreateCharacter({
        mutation: {
            onSuccess: () => {
                setAuthSessionOptimistic();
                successNotify("Twoja nowa postać została utworzona");
                navigate(routes.character.list);
            },
            onError: (error) => handleApiError(error),
        },
    });

    useEffect(() => {
        setCharacter({ characterName: watchedName });
    }, [watchedName, setCharacter]);

    const onSubmit = handleSubmit((formData) => {
        createCharacterMutation.mutate({ data: toCreateCharacterDTO(formData) });
    });

    const isLoading = createCharacterMutation.isPending;

    return (
        <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2" autoComplete="off">
            <div className="sm:col-span-2">
                <InputField
                    label="Nazwa postaci"
                    type="text"
                    placeholder="Twoja nazwa postaci"
                    icon={<Sparkles size={18} />}
                    {...register("characterName")}
                    error={errors.characterName?.message}
                    disabled={isLoading}
                />
            </div>

            <div className="sm:col-span-2 flex justify-end gap-2">
                <Button
                    type="submit"
                    icon={<Wand2 size={18} />}
                    disabled={isLoading}
                    loading={isLoading}
                >
                    Utwórz postać
                </Button>
            </div>
        </form>
    );
};

export default CreateCharacterForm;
