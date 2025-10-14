import { memo } from "react";
import { cn } from "@shared/libs/cn";
import Tooltip from "@shared/components/Tooltip"; // dopasuj ścieżkę jeśli masz inną

type StatusBarVariant = "hp" | "mana" | "stamina" | "xp";

type StatusBarProps = {
    variant: StatusBarVariant;
    value: number;
    max: number;
};

const StatusBarLabelNameByVariant: Record<StatusBarVariant, string> = {
    hp: "Zdrowie",
    mana: "Mana",
    stamina: "Stamina",
    xp: "Doświadczenie",
};

const StatusBarVariantGradient: Record<StatusBarVariant, { from: string; to: string }> = {
    hp: { from: "from-complementary-green", to: "to-complementary-green-300" },
    mana: { from: "from-complementary-blue", to: "to-complementary-blue-300" },
    stamina: { from: "from-secondary", to: "to-secondary-300" },
    xp: { from: "from-complementary-red", to: "to-complementary-red-300" },
};

export const StatusBar = memo(function StatusBar({ variant, value, max }: StatusBarProps) {
    const safeMax = Math.max(1, max);
    const pct = Math.max(0, Math.min(100, (value / safeMax) * 100));
    const label = StatusBarLabelNameByVariant[variant];
    const { from, to } = StatusBarVariantGradient[variant];

    const rightText = variant === "xp" ? `${Math.round(pct)}%` : `${value}/${max}`;

    const remaining = Math.max(0, max - value);
    const xpTooltip = `XP: ${value}/${max} • Brakuje: ${remaining} XP`;

    const Meter = (
        <div
            className="h-3 rounded-full bg-black/40 border border-primary/30 overflow-hidden"
            role="progressbar"
            aria-label={label}
            aria-valuemin={0}
            aria-valuemax={max}
            aria-valuenow={value}
        >
            <div
                className={cn("h-full transition-all duration-200 bg-gradient-to-r", from, to)}
                style={{ width: `${pct}%` }}
            />
        </div>
    );

    return (
        <div className={cn("space-y-1")}>
            <div className="flex items-center justify-between text-xs text-text-secondary">
                <span>{label}</span>
                <span className="tabular-nums">{rightText}</span>
            </div>

            {variant === "xp" ? <Tooltip title={xpTooltip}>{Meter}</Tooltip> : Meter}
        </div>
    );
});
