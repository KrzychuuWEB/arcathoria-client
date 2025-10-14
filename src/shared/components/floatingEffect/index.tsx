import {
    type EffectItem,
    FloatingEffect,
} from "@shared/components/floatingEffect/FloatingEffect.tsx";

export const FloatingEffectsHost = ({
    effects,
    onRemove,
}: {
    effects: EffectItem[];
    onRemove: (id: string) => void;
}) => {
    return (
        <div className="absolute inset-0">
            {effects.map((e, i) => (
                <FloatingEffect key={e.id} item={e} index={i} onDone={onRemove} />
            ))}
        </div>
    );
};
