import { ShieldUser, Swords } from "lucide-react";
import * as React from "react";
import GameSectionDockMobile from "@shared/components/layout/game/GameSectionDockMobile.tsx";

export type GameSectionDockType = "dashboard" | "expedition";

export type GameSectionDockItem = {
    key: GameSectionDockType;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: number;
};

const DOCK_SECTIONS: GameSectionDockItem[] = [
    { key: "dashboard", label: "Postać", icon: ShieldUser },
    { key: "expedition", label: "Ekspedycja", icon: Swords },
];

const GameSectionDock = () => {
    const [active, setActive] = React.useState<GameSectionDockType>("dashboard");

    const onChange = (key: GameSectionDockType) => {
        setActive(key);
    };

    return (
        <>
            <aside className="hidden lg:flex fixed inset-y-0 left-0 z-30 transition-all duration-300 w-[92px]">
                <div className="flex h-full w-full items-center justify-center px-0.5">
                    <div className="flex w-full flex-col rounded-r-2xl border-r border-primary/40 bg-black/40 backdrop-blur-md shadow-[4px_0_22px_var(--glow-primary,rgba(106,13,173,0.35))] p-2 max-h-[calc(100vh-24px)] overflow-y-auto snap-y snap-mandatory">
                        <nav className="flex flex-col gap-2">
                            {DOCK_SECTIONS.map(({ key, label, icon: Icon, badge }) => {
                                const isActive = key === active;
                                return (
                                    <button
                                        type="button"
                                        key={key}
                                        onClick={() => onChange(key)}
                                        className={`cursor-pointer relative grid place-items-center text-center rounded-xl border px-2 py-2 transition group snap-start ${
                                            isActive
                                                ? "bg-primary/30 border-secondary/60 text-secondary shadow-[0_0_14px_rgba(255,215,0,0.45)]"
                                                : "bg-primary/10 border-primary/40 text-text-secondary hover:text-text-light hover:bg-primary/20"
                                        }`}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        <span
                                            className={`grid place-items-center rounded-lg w-10 h-10 mb-1 border ${
                                                isActive
                                                    ? "border-secondary/60 bg-primary/25"
                                                    : "border-primary/40 bg-primary/15 group-hover:bg-primary/20"
                                            }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                        </span>
                                        <span className="text-[11px] leading-tight font-roboto truncate max-w-[76px]">
                                            {label}
                                        </span>

                                        {badge && badge > 0 && (
                                            <span className="absolute -top-1 -right-1 inline-flex min-w-5 h-5 items-center justify-center rounded-full bg-secondary text-black text-[10px] font-bold px-1 shadow">
                                                {badge > 99 ? "99+" : badge}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </aside>

            <GameSectionDockMobile active={active} onChange={onChange} sections={DOCK_SECTIONS} />
        </>
    );
};

export default GameSectionDock;
