import type { Character } from "@domain/character/types.ts";
import BlurContainer from "@shared/components/BlurContainer.tsx";
import { TitleWithIcon } from "@shared/components/TitleWithIcon.tsx";
import { Info, Shield } from "lucide-react";
import Tooltip from "@shared/components/Tooltip.tsx";
import { AttributeRow } from "@features/dashboard/components/AttributeRow.tsx";

export type CharacterAttributeProps = {
    character?: Character | null;
};

export const CharacterAttributes = ({ character }: CharacterAttributeProps) => {
    return (
        <BlurContainer>
            <div className="flex items-center justify-between mb-3">
                <TitleWithIcon icon={Shield} title="Atrybuty" />
                <Tooltip title="Koszt wzrasta wraz z poziomem atrybutu.">
                    <Info className="w-5 h-5 text-secondary" />
                </Tooltip>
            </div>

            <div className="grid gap-2">
                <AttributeRow
                    attrKey="strength"
                    label="Siła"
                    value={0}
                    onInc={() => console.log("strength")}
                    disabledInc={true}
                />
                <AttributeRow
                    attrKey="agility"
                    label="Zręczność"
                    value={0}
                    onInc={() => console.log("agility")}
                    disabledInc={true}
                />
                <AttributeRow
                    attrKey="intellect"
                    label="Intelekt"
                    value={character?.intelligence || 0}
                    onInc={() => console.log("intellect")}
                    disabledInc={true}
                />
                <AttributeRow
                    attrKey="vitality"
                    label="Witalność"
                    value={0}
                    onInc={() => console.log("vitality")}
                    disabledInc={true}
                />
                <AttributeRow
                    attrKey="spirit"
                    label="Duch"
                    value={0}
                    onInc={() => console.log("spirit")}
                    disabledInc={true}
                />
            </div>
        </BlurContainer>
    );
};
