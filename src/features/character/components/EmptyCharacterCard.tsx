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
        bg-[#1E1E2C]/50 backdrop-blur-md
        border border-dashed border-[#6A0DAD]/40
        hover:border-[#FFD700]/60
        hover:bg-[#2C1E40]/70
        hover:shadow-[0_0_25px_rgba(255,215,0,0.25)]
        transition-all duration-300
      "
                aria-label="Dodaj postać"
            >
                <div
                    className="
          flex items-center justify-center w-12 h-12 rounded-full
          bg-[#6A0DAD]/20 border border-[#6A0DAD]/40
          text-[#FFD700] group-hover:text-[#FFD700]
          shadow-[0_0_12px_rgba(106,13,173,0.3)]
          group-hover:shadow-[0_0_18px_rgba(255,215,0,0.4)]
          transition-all duration-300
        "
                >
                    <Plus className="w-6 h-6" />
                </div>
                <span className="font-cinzel text-[#F2F2F2] text-base mt-2">Dodaj postać</span>
            </button>
        </Tooltip>
    );
};

export default EmptyCharacterCard;
