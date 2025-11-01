import { type Attributes, BASE_ATTRIBUTE_COST } from "@domain/character/types.ts";
import { cn } from "@shared/libs/cn.ts";
import { Coins, Plus } from "lucide-react";

export const AttributeRow = ({
    attrKey,
    label,
    value,
    onInc,
    disabledInc,
}: {
    attrKey: Attributes;
    label: string;
    value: number;
    onInc: () => void;
    disabledInc?: boolean;
}) => {
    const nextPointCost = (key: Attributes, currentTotal: number) =>
        Math.floor(BASE_ATTRIBUTE_COST[key] * (1 + 0.12 * currentTotal));

    const effective = value;
    const cost = nextPointCost(attrKey, effective);

    return (
        <div className="flex items-center justify-between rounded-lg border border-primary/40 bg-black/40 px-3 py-2">
            <div className="flex items-center gap-2">
                <span className="text-text-secondary text-sm">{label}</span>
            </div>

            <div className="flex items-center gap-3">
                <span className="text-[11px] text-text-secondary inline-flex items-center gap-1">
                    <Coins className="w-3.5 h-3.5 text-secondary" />
                    <span className="text-text-light">{cost.toLocaleString()}</span> złota
                </span>

                <span className="font-semibold text-text-light w-8 text-right">{effective}</span>

                <div className="flex items-center gap-1">
                    <button
                        onClick={onInc}
                        disabled={disabledInc}
                        className={cn(
                            "grid place-content-center w-7 h-7 rounded-md border border-primary/40 bg-black/40",
                            "hover:border-secondary/60 hover:bg-primary-600/20 transition",
                            "disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
                        )}
                        aria-label="Zwiększ"
                    >
                        <Plus className="w-3.5 h-3.5 text-secondary" />
                    </button>
                </div>
            </div>
        </div>
    );
};
