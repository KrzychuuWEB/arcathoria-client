import { useMemo } from "react";
import { cn } from "@shared/libs/cn";

const clampPct = (value: number) => Math.max(0, Math.min(100, value));

type BarVariant = "energy" | "xp";

type BarProps = {
    variant: BarVariant;
    value: number;
    max: number;
    ariaLabel?: string;
    className?: string;
};

const variantStyles: Record<BarVariant, { from: string; to: string; label: string }> = {
    energy: {
        from: "from-secondary",
        to: "to-secondary-300",
        label: "Pasek energii",
    },
    xp: {
        from: "from-complementary-red",
        to: "to-complementary-red-300",
        label: "Pasek doświadczenia",
    },
};

export const MenuCharacterBar = ({ variant, value, max, ariaLabel, className }: BarProps) => {
    const { from, to, label } = variantStyles[variant];
    const pct = useMemo(() => clampPct((value / Math.max(max, 1)) * 100), [value, max]);

    return (
        <div
            className={cn(
                "w-full h-2 rounded-full bg-black/40 border border-primary/30 overflow-hidden",
                className,
            )}
            aria-label={ariaLabel || label}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={max}
            aria-valuenow={value}
        >
            <div
                className={cn(
                    "h-full transition-all duration-500 ease-out bg-gradient-to-r",
                    from,
                    to,
                )}
                style={{ width: `${pct}%` }}
            />
        </div>
    );
};
