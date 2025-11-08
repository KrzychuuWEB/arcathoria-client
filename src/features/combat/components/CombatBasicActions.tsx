import { Heart, Shield, Swords } from "lucide-react";
import { CombatActionButton } from "@features/combat/components/CombatActionButton.tsx";
import BlurContainer from "@shared/components/BlurContainer.tsx";

type CombatBasicActionProps = {
    handleBasicAction: () => void;
    loading: boolean;
};

export const CombatBasicActions = ({ handleBasicAction, loading }: CombatBasicActionProps) => {
    return (
        <BlurContainer>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <CombatActionButton
                    title="Atak podstawowy"
                    icon={Swords}
                    color="text-complementary-red-600"
                    onClick={handleBasicAction}
                    disabled={loading}
                />

                <CombatActionButton
                    title="Obrona"
                    icon={Shield}
                    onClick={() => console.log("Obrona")}
                    disabled={true}
                />

                <CombatActionButton
                    title="Leczenie"
                    icon={Heart}
                    color="text-complementary-green"
                    onClick={() => console.log("Leczenie")}
                    disabled={true}
                />
            </div>
        </BlurContainer>
    );
};
