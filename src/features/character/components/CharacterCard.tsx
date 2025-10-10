import { Trash2 } from "lucide-react";
import * as React from "react";

type CharacterCardProps = {
    id: string;
    name: string;
    level: number;
    avatarUrl: string;
};

const CharacterCard = ({
    character,
    onDelete,
    onSelect,
}: {
    character: CharacterCardProps;
    onDelete: (id: string) => void;
    onSelect: (id: string) => void;
}) => {
    const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect(character.id);
        }
    };

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => onSelect(character.id)}
            onKeyDown={handleKey}
            className="
        group flex items-center gap-4 p-5 rounded-2xl
        bg-[#1E1E2C]/60 backdrop-blur-md
        border border-[#6A0DAD]/40
        shadow-[0_0_18px_rgba(106,13,173,0.3)]
        hover:shadow-[0_0_28px_rgba(255,215,0,0.25)]
        transition-all duration-300
        cursor-pointer
      "
            aria-label={`Wybierz postać ${character.name}`}
            title={`Wybierz: ${character.name}`}
        >
            <div className="relative w-20 h-20 flex-shrink-0">
                <img
                    src={character.avatarUrl}
                    alt={character.name}
                    className="
            w-20 h-20 object-cover rounded-full
            border border-[#6A0DAD]/40
            shadow-[0_0_12px_rgba(255,215,0,0.2)]
            transition-transform duration-300
            group-hover:scale-[1.03]
          "
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#6A0DAD]/20 to-[#FFD700]/10 opacity-60 blur-md" />
            </div>

            <div className="flex flex-col flex-1 min-w-0">
                <h3 className="font-cinzel text-[#F2F2F2] text-lg truncate">{character.name}</h3>
                <p className="font-roboto text-sm text-[#D1C4E9]">
                    Poziom <span className="text-[#FFD700] font-semibold">{character.level}</span>
                </p>
            </div>

            <div className="flex items-center">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(character.id);
                    }}
                    className="
            cursor-pointer p-2 rounded-xl border border-transparent
            text-rose-400 hover:border-rose-400/40 hover:bg-rose-500/10
            transition-all duration-200
          "
                    title="Usuń postać"
                    aria-label={`Usuń postać ${character.name}`}
                >
                    <Trash2 className="w-5 h-5 cursor-pointer" />
                </button>
            </div>
        </div>
    );
};

export default CharacterCard;
