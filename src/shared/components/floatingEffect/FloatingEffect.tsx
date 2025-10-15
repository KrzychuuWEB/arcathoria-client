import { memo, useEffect, useState } from "react";
import "./effect.css";

export type EffectVariant = "damage";

export type EffectItem = {
    variant: EffectVariant;
    value: number;
    delay?: number;
};

const EFFECTS: Record<EffectVariant, { color: string; format: (value: number) => string }> = {
    damage: {
        color: "text-complementary-red",
        format: (value) => `-${value}`,
    },
};

export const FloatingEffect = memo(function FloatingEffect({
    variant,
    value,
    delay = 0,
}: EffectItem) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), delay);
        const hideTimeout = setTimeout(() => setVisible(false), delay + 1000);

        return () => {
            clearTimeout(timeout);
            clearTimeout(hideTimeout);
        };
    }, []);

    const effectData = EFFECTS[variant];
    const formatText = effectData.format(value);

    return (
        <>
            {visible && (
                <div className="absolute inset-0 pointer-events-none grid items-end justify-center">
                    <span
                        className={`
                            relative
                            [font-family:var(--font-heading)]
                            font-extrabold leading-none
                            text-[clamp(18px,1.6vw,24px)]
                            select-none whitespace-nowrap
                            [filter:saturate(1.1)_drop-shadow(0_0_10px_rgba(224,42,42,0.7))_drop-shadow(0_0_2px_rgba(0,0,0,1))]
                            [text-shadow:_0_1px_0_rgba(0,0,0,0.85),_0_2px_6px_rgba(0,0,0,0.35)]
                            animate-[fx-floatUp_1000ms_cubic-bezier(0.22,0.82,0.24,1)_forwards]
                            ${effectData.color}
                          `}
                    >
                        {formatText}
                    </span>
                </div>
            )}
        </>
    );
});
