import { ScrollText } from "lucide-react";
import BlurContainer from "@shared/components/BlurContainer.tsx";

export const CombatLog = () => {
    return (
        <BlurContainer>
            <h4 className="font-cinzel text-text-light mb-3 flex items-center gap-2">
                <ScrollText className="text-secondary" /> Dziennik Walki
            </h4>
            <div className="space-y-2 max-h-[420px] overflow-auto pr-1">
                <p className="text-text-secondary">Dziennik walki niedostępny</p>
            </div>
        </BlurContainer>
    );
};
