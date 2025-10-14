import { Flame, Sparkles } from "lucide-react";
import Tooltip from "@shared/components/Tooltip.tsx";
import BlurContainer from "@shared/components/BlurContainer.tsx";

export const CombatSpells = () => {
    return (
        <BlurContainer>
            <h4 className="font-cinzel text-text-light mb-3 flex items-center gap-2">
                <Sparkles className="text-secondary" /> Zaklęcia
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                <div className="relative">
                    <Tooltip title="Kula ognia">
                        <button
                            disabled={true}
                            className="cursor-pointer group flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-primary/40 bg-black/40 text-text-light hover:border-secondary/60 hover:text-secondary hover:bg-primary-dark/60 disabled:opacity-50 disabled:cursor-not-allowed transition w-full"
                        >
                            <span className="grid place-content-center w-10 h-10 rounded-lg bg-primary/15 border border-primary/40 text-secondary">
                                <Flame />
                            </span>
                            <span className="text-xs font-roboto">Zaklęcie niedostępne</span>
                            <span className="text-[10px] text-text-secondary">0 MP</span>
                        </button>
                    </Tooltip>
                </div>
            </div>
        </BlurContainer>
    );
};
