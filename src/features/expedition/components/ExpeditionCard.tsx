import { cn } from "@shared/libs/cn.ts";
import type { Biome, BiomeKey } from "@features/expedition/pages/ChooseExpeditionPage.tsx";

const ACCENT_BY_BIOME: Record<BiomeKey, { glow: string; border: string; badge: string }> = {
    forest: {
        glow: "shadow-[0_0_24px_rgba(76,175,80,0.25)]",
        border: "border-complementary-green-300",
        badge: "text-complementary-green bg-complementary-green/10 border-complementary-green/40",
    },
    mountain: {
        glow: "shadow-[0_0_24px_rgba(10,116,218,0.25)]",
        border: "border-complementary-blue-300",
        badge: "text-complementary-blue bg-complementary-blue/10 border-complementary-blue/40",
    },
    ruins: {
        glow: "shadow-[0_0_24px_rgba(255,215,0,0.25)]",
        border: "border-secondary-300",
        badge: "text-secondary bg-secondary/10 border-secondary/40",
    },
    vulcan: {
        glow: "shadow-[0_0_24px_rgba(224,42,42,0.25)]",
        border: "border-complementary-red-300",
        badge: "text-complementary-red bg-complementary-red/10 border-complementary-red/40",
    },
};

export const ExpeditionCard = ({
    b,
    selected,
    onSelect,
}: {
    b: Biome;
    selected: boolean;
    onSelect: () => void;
}) => {
    const accent = ACCENT_BY_BIOME[b.key as BiomeKey];
    return (
        <button
            onClick={onSelect}
            className={cn(
                "relative group rounded-2xl border bg-black/40 p-4 transition cursor-pointer text-left",
                "border-primary/40 hover:border-secondary/60 hover:bg-primary-600/20",
                selected && cn("ring-2 ring-secondary/20", accent.border, accent.glow),
            )}
            aria-pressed={selected}
        >
            <span
                className={cn(
                    "absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] border",
                    accent.badge,
                    selected ? "opacity-100" : "opacity-80",
                )}
            >
                {b.name}
            </span>

            <div className="flex items-center gap-3">
                <img
                    src={b.icon}
                    alt={b.name}
                    className="w-12 h-12 object-contain drop-shadow-[0_0_6px_rgba(255,215,0,0.25)]"
                />
                <span className="font-cinzel text-text-light text-lg">{b.name}</span>
            </div>
        </button>
    );
};
