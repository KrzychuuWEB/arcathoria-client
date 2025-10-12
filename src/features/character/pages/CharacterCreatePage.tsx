import { Wand2 } from "lucide-react";
import CreateCharacterForm from "@features/character/forms/CreateCharacterForm.tsx";
import { useState } from "react";
import type { characterSchema } from "@shared/validations/characterSchema.ts";
import { z } from "zod";
import CharacterCreatePreview from "@features/character/components/CharacterCreatePreview.tsx";
import BlurContainer from "@shared/components/BlurContainer.tsx";

type CharacterFormData = z.infer<typeof characterSchema>;

const CreateCharacterPage = () => {
    const [draft, setDraft] = useState<CharacterFormData>({ characterName: "" });

    return (
        <div>
            <div className="px-4 sm:px-6 py-4">
                <div className="mx-auto max-w-6xl flex items-center justify-between">
                    <h1 className="font-cinzel text-xl sm:text-2xl text-text-light flex items-center gap-2">
                        <Wand2 className="text-secondary" />
                        Tworzenie postaci
                    </h1>
                </div>
            </div>

            <div className="px-4 sm:px-6">
                <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-[1fr_420px]">
                    <section className="space-y-4">
                        <BlurContainer>
                            <h2 className="font-cinzel text-lg text-text-light mb-4">Podstawy</h2>

                            <CreateCharacterForm setCharacter={setDraft} />
                        </BlurContainer>
                    </section>

                    <BlurContainer>
                        <h3 className="font-cinzel text-lg text-text-light mb-4">
                            Podgląd postaci
                        </h3>

                        <CharacterCreatePreview character={draft} />
                    </BlurContainer>
                </div>
            </div>
        </div>
    );
};

export default CreateCharacterPage;
