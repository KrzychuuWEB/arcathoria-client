import { Wand2 } from "lucide-react";
import CreateCharacterForm from "@features/character/forms/CreateCharacterForm.tsx";
import { useState } from "react";
import type { characterSchema } from "@shared/validations/characterSchema.ts";
import { z } from "zod";
import CharacterCreatePreview from "@features/character/components/CharacterCreatePreview.tsx";

type CharacterFormData = z.infer<typeof characterSchema>;

const CreateCharacterPage = () => {
    const [draft, setDraft] = useState<CharacterFormData>({ characterName: "" });

    return (
        <div className="min-h-dvh">
            <div className="px-4 sm:px-6 py-4">
                <div className="mx-auto max-w-6xl flex items-center justify-between">
                    <h1 className="font-cinzel text-xl sm:text-2xl text-text-light flex items-center gap-2">
                        <Wand2 className="text-secondary" />
                        Tworzenie postaci
                    </h1>
                </div>
            </div>

            <div className="px-4 sm:px-6 pb-10">
                <div className="mx-auto max-w-6xl grid gap-6 lg:grid-cols-[1fr_420px]">
                    <section className="space-y-4">
                        <div className="rounded-2xl border border-primary/40 bg-black/30 backdrop-blur-md p-5 shadow-[0_0_18px_rgba(106,13,173,0.3)]">
                            <h2 className="font-cinzel text-lg text-text-light mb-4">Podstawy</h2>

                            <CreateCharacterForm setCharacter={setDraft} />
                        </div>
                    </section>

                    <div className="rounded-2xl border border-primary/40 bg-black/30 backdrop-blur-md p-5 shadow-[0_0_18px_rgba(106,13,173,0.3)]">
                        <h3 className="font-cinzel text-lg text-text-light mb-4">
                            Podgląd postaci
                        </h3>

                        <CharacterCreatePreview character={draft} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateCharacterPage;
