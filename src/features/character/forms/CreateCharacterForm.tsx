import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { characterSchema } from "@shared/validations/characterSchema.ts";
import { routes } from "@app/routes.ts";
import InputField from "@shared/components/InputField.tsx";
import { Sparkles, Wand2 } from "lucide-react";
import Button from "@shared/components/Button.tsx";
import { z } from "zod";
import { useEffect } from "react";

type CharacterFormData = z.infer<typeof characterSchema>;

type CharacterFormProps = {
    setCharacter: (data: CharacterFormData) => void;
};

const CreateCharacterForm = ({ setCharacter }: CharacterFormProps) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<CharacterFormData>({
        resolver: zodResolver(characterSchema),
    });

    const watchedName = useWatch({ control, name: "characterName" }) ?? "";

    useEffect(() => {
        setCharacter({ characterName: watchedName });
    }, [watchedName, setCharacter]);

    const onSubmit = (data: CharacterFormData) => {
        console.log(data.characterName);
        navigate(routes.character.list);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid gap-4 sm:grid-cols-2"
            autoComplete="off"
        >
            <div className="sm:col-span-2">
                <InputField
                    label="Nazwa postaci"
                    type="text"
                    placeholder="Twoja nazwa postaci"
                    icon={<Sparkles size={18} />}
                    {...register("characterName")}
                    error={errors.characterName?.message}
                />
            </div>

            <div className="sm:col-span-2 flex justify-end gap-2">
                <Button type="submit" icon={<Wand2 size={18} />} disabled={isSubmitting}>
                    Utwórz postać
                </Button>
            </div>
        </form>
    );
};

export default CreateCharacterForm;
