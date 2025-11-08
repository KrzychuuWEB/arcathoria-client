import { z } from "zod";
import { createCharacterSchema } from "@shared/validations/schema/character/create.ts";

type CharacterPreviewProps = {
    character: z.infer<typeof createCharacterSchema>;
};

const CharacterCreatePreview = ({ character }: CharacterPreviewProps) => {
    return (
        <div className="flex items-center gap-4">
            <div className="relative w-24 h-24">
                <img
                    src="/default_avatar.png"
                    alt={character.characterName || "avatar"}
                    className="w-24 h-24 object-cover rounded-full border border-primary/40 shadow-[0_0_12px_rgba(255,215,0,0.2)]"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 opacity-60 blur-md" />
            </div>

            <div className="min-w-0">
                <p className="font-cinzel text-lg text-text-light truncate">
                    {character.characterName || "—"}
                </p>
            </div>
        </div>
    );
};

export default CharacterCreatePreview;
