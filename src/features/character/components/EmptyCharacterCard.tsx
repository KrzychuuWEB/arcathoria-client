import { Plus } from "lucide-react";
import Tooltip from "@shared/components/Tooltip.tsx";

const EmptyCharacterCard = ({ onAdd }: { onAdd: () => void }) => {
    return (
        <Tooltip title="Dodaj postać">
            <button
                onClick={onAdd}
                className="
                    cursor-pointer group relative flex flex-col items-center justify-center p-6 rounded-2xl
                    min-h-[140px]
                    bg-black/30 backdrop-blur-md
                    border border-dashed border-primary/40
                    hover:border-secondary/60
                    hover:bg-primary-dark/70
                    hover:shadow-[0_0_25px_rgba(255,215,0,0.25)]
                    transition-all duration-300
                "
                aria-label="Dodaj postać"
            >
                <div
                    className="
                        flex items-center justify-center w-12 h-12 rounded-full
                        bg-primary/20 border border-primary/40
                        text-secondary group-hover:text-secondary
                        shadow-[0_0_12px_rgba(106,13,173,0.3)]
                        group-hover:shadow-[0_0_18px_rgba(255,215,0,0.4)]
                        transition-all duration-300
                    "
                >
                    <Plus className="w-6 h-6" />
                </div>
                <span className="font-cinzel text-text-light text-base mt-2">Dodaj postać</span>
            </button>
        </Tooltip>
    );
};

export default EmptyCharacterCard;
