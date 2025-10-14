import { memo, useEffect, useMemo, useState } from "react";
import { cn } from "@shared/libs/cn";
import "./effect.css";

export type EffectVariant =
    | "damage"
    | "heal"
    | "mana"
    | "xp"
    | "defend"
    | "crit"
    | "info"
    | "buff"
    | "debuff";

export type EffectItem = {
    id: string;
    variant: EffectVariant;
    value?: number;
    text?: string;
    lifetimeMs?: number;
    crit?: boolean;
};

const STYLES: Record<
    EffectVariant,
    { color: string; shadow: string; prefix?: string; suffix?: string; upper?: boolean }
> = {
    damage: {
        color: "text-complementary-red",
        shadow: "drop-shadow-[0_0_8px_rgba(220,38,38,0.6)]",
        prefix: "-",
        upper: false,
    },
    heal: {
        color: "text-complementary-green",
        shadow: "drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]",
        prefix: "+",
        upper: false,
    },
    mana: {
        color: "text-complementary-blue",
        shadow: "drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]",
        prefix: "+",
        suffix: " MP",
        upper: false,
    },
    xp: {
        color: "text-secondary",
        shadow: "drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]",
        prefix: "+",
        suffix: " XP",
        upper: false,
    },
    defend: {
        color: "text-secondary",
        shadow: "drop-shadow-[0_0_8px_rgba(56,189,248,0.45)]",
        upper: true,
    },
    crit: {
        color: "text-[#FFD700]",
        shadow: "drop-shadow-[0_0_10px_rgba(255,215,0,0.65)]",
        upper: true,
    },
    info: { color: "text-text-secondary", shadow: "drop-shadow-[0_0_6px_rgba(148,163,184,0.35)]" },
    buff: { color: "text-secondary", shadow: "drop-shadow-[0_0_8px_rgba(56,189,248,0.45)]" },
    debuff: {
        color: "text-complementary-red",
        shadow: "drop-shadow-[0_0_8px_rgba(220,38,38,0.45)]",
    },
};

const formatContent = (item: EffectItem): string => {
    const s = STYLES[item.variant];
    if (item.text != null) return s.upper ? item.text.toUpperCase() : item.text;
    const v = Math.abs(item.value ?? 0);
    const prefix = s.prefix ?? "";
    const suffix = s.suffix ?? "";
    const sign = item.variant === "damage" ? "-" : prefix;
    const base = `${sign}${v}${suffix}`;
    return s.upper ? base.toUpperCase() : base;
};

export const FloatingEffect = memo(function ({
    item,
    index,
    onDone,
    jitter = true,
}: {
    item: EffectItem;
    index: number;
    onDone: (id: string) => void;
    jitter?: boolean;
}) {
    const lifetime = item.lifetimeMs ?? 900;
    const [visible, setVisible] = useState(true);

    const y = useMemo(() => -8 - index * 14, [index]);
    const x = useMemo(() => (jitter ? Math.floor((Math.random() - 0.5) * 12) : 0), [jitter]);

    useEffect(() => {
        const t = setTimeout(() => {
            setVisible(false);
            onDone(item.id);
        }, lifetime);
        return () => clearTimeout(t);
    }, [item.id, lifetime, onDone]);

    if (!visible) return null;

    const s = STYLES[item.variant];
    const text = formatContent(item);

    return (
        <span
            className={cn(
                "absolute left-1/2 -translate-x-1/2 select-none pointer-events-none",
                "font-cinzel",
                item.crit ? "text-lg" : "text-sm",
                s.color,
                s.shadow,
            )}
            style={{
                top: y,
                transform: `translate(calc(-50% + ${x}px), 0)`,
                animation: `float-up ${lifetime}ms ease-out forwards`,
            }}
        >
            {text}
        </span>
    );
});
