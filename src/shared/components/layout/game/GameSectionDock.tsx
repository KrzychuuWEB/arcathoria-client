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
            <aside className="hidden lg:flex fixed inset-y-0 left-0 z-30 transition-all duration-300 w-[82px]">
                <div className="flex h-full w-full items-center justify-center px-0.5">
                    <div className="flex w-full flex-col rounded-r-2xl border border-primary/40 bg-black/60 backdrop-blur-xl shadow-[4px_0_18px_var(--glow-primary,rgba(106,13,173,0.3))] max-h-[calc(100vh-24px)] overflow-y-auto snap-y snap-mandatory">
                        <nav className="flex flex-col">
                            {DOCK_SECTIONS.map(({ key, label, icon: Icon, badge }) => {
                                const isActive = key === active;
                                return (
                                    <button
                                        type="button"
                                        key={key}
                                        onClick={() => onChange(key)}
                                        className={`cursor-pointer relative flex w-full h-[92px] flex-col items-center justify-center gap-1 text-[11px] border-b last:border-b-0 snap-start ${
                                            isActive
                                                ? "text-secondary bg-primary/20 border-primary/40"
                                                : "text-text-secondary border-primary/20"
                                        }`}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="leading-none truncate px-1 max-w-[76px]">
                                            {label}
                                        </span>
                                        {badge && badge > 0 && (
                                            <span className="absolute top-1 right-1 inline-flex min-w-5 h-5 items-center justify-center rounded-full bg-secondary text-black text-[10px] font-bold px-1 shadow">
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
