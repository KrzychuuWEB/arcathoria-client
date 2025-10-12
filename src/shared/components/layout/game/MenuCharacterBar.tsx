import { useMemo } from "react";

const clampPct = (value: number) => Math.max(0, Math.min(100, value));

type BarVariant = "energy" | "xp";

type BarProps = {
    variant: BarVariant;
    value: number;
    max: number;
    ariaLabel?: string;
};

const variantStyles: Record<BarVariant, { from: string; to: string; label: string }> = {
    energy: {
        from: "#388e3c",
        to: "#66bb6a",
        label: "Pasek energii",
    },
    xp: {
        from: "#e02a2a",
        to: "#ff6b6b",
        label: "Pasek doświadczenia",
    },
};

export const MenuCharacterBar = ({ variant, value, max, ariaLabel }: BarProps) => {
    const { from, to, label } = variantStyles[variant];
    const pct = useMemo(() => clampPct((value / Math.max(max, 1)) * 100), [value, max]);

    return (
        <div
            className="w-full h-2 rounded-full bg-black/40 border border-primary/30 overflow-hidden"
            aria-label={ariaLabel || label}
        >
            <div
                className="h-full transition-all duration-500 ease-out"
                style={{
                    width: `${pct}%`,
                    background: `linear-gradient(90deg, ${from}, ${to})`,
                }}
            />
        </div>
    );
};
