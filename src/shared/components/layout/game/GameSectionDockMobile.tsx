import * as React from "react";
import type {
    GameSectionDockItem,
    GameSectionDockType,
} from "@shared/components/layout/game/GameSectionDock.tsx";

type GameSectionDockMobileProps = {
    active: string;
    onChange: (key: GameSectionDockType) => void;
    sections: GameSectionDockItem[];
};

const GameSectionDockMobile = ({ active, onChange, sections }: GameSectionDockMobileProps) => {
    const MOBILE_NAV_HEIGHT = 64;

    const cssVars: React.CSSProperties = {
        // @ts-expect-error custom property
        "--mobile-nav-height": `${MOBILE_NAV_HEIGHT}px`,
    };

    return (
        <>
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-3" style={cssVars}>
                <div className="pb-[env(safe-area-inset-bottom)]">
                    <div className="min-[500px]:flex min-[500px]:justify-center">
                        <div
                            className="
                                rounded-t-2xl border border-primary/40 bg-black/60 backdrop-blur-xl shadow-[0_0_18px_var(--glow-primary,rgba(106,13,173,0.3))]
                                w-full min-[500px]:w-auto
                              "
                        >
                            <div
                                className="relative"
                                style={{ height: "var(--mobile-nav-height)" }}
                            >
                                <div
                                    className="
                                        h-full
                                        overflow-x-auto overflow-y-hidden
                                        snap-x snap-mandatory
                                        no-scrollbar
                                        min-[500px]:max-w-[calc(100vw-24px)]  /* 24px = 2*px-3 z nav */
                                        max-w-full
                                      "
                                    role="tablist"
                                    aria-label="Nawigacja sekcji (mobile/tablet)"
                                >
                                    <div className="w-max max-w-full mx-auto h-full flex items-stretch">
                                        {sections.map(({ key, label, icon: Icon, badge }) => {
                                            const isActive = key === active;
                                            return (
                                                <button
                                                    type="button"
                                                    key={key}
                                                    onClick={() => onChange(key)}
                                                    role="tab"
                                                    aria-selected={isActive}
                                                    className={`
                                                    cursor-pointer flex-none
                                                    w-[92px] h-full
                                                    flex flex-col items-center justify-center gap-1
                                                    text-[11px]
                                                    border-r last:border-r-0
                                                    snap-center
                                                        ${isActive ? "text-secondary bg-primary/20 border-primary/40" : "text-text-secondary border-primary/20"}
                                                      `}
                                                >
                                                    <Icon className="w-5 h-5" />
                                                    <span className="leading-none truncate px-1">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default GameSectionDockMobile;
