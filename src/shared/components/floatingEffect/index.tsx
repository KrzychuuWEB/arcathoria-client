import {
    type EffectItem,
    FloatingEffect,
} from "@shared/components/floatingEffect/FloatingEffect.tsx";

export const FloatingEffectsHost = ({ effects }: { effects: EffectItem[] }) => {
    return (
        <div className="absolute inset-0">
            {effects.map((e, i) => (
                <FloatingEffect key={i} variant={e.variant} value={e.value} />
            ))}
        </div>
    );
};
