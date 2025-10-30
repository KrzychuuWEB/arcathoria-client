import { Coins, Gem, LogOut, Menu, Settings, Sparkles, User, X, Zap } from "lucide-react";
import { useState } from "react";
import { MenuCharacterBar } from "@shared/components/layout/game/MenuCharacterBar.tsx";
import type { Character } from "@domain/character/types.ts";
import { ArcathoriaSkeleton } from "@shared/components/ArcathoriaSkeleton.tsx";

type GameTopMenuMobileProps = {
    character?: Character;
    loading: boolean;
    onOpenCharacter: () => void;
    onOpenSettings: () => void;
    onLogout: () => void;
};

const GameTopMenuMobile = ({
    character,
    loading,
    onOpenCharacter,
    onOpenSettings,
    onLogout,
}: GameTopMenuMobileProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="relative z-10 sm:hidden">
            <div className="flex items-center justify-between gap-2">
                <button
                    type="button"
                    onClick={onOpenCharacter}
                    className="cursor-pointer inline-flex items-center gap-2 px-2 py-1.5 rounded-xl border border-primary/40 bg-primary/20 text-text-light min-w-0"
                >
                    <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-primary/50">
                        {loading ? (
                            <ArcathoriaSkeleton variant="block" width={70} height={14} radius={6} />
                        ) : (
                            <>
                                {character?.avatar_url ? (
                                    <img
                                        src={character?.avatar_url}
                                        alt="Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full grid place-items-center bg-black/40">
                                        <User className="w-5 h-5 text-secondary" />
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                    <div className="min-w-0">
                        <div className="flex items-center gap-2 text-sm font-roboto flex-wrap">
                            <span className="truncate max-w-[22ch]">
                                {loading ? (
                                    <ArcathoriaSkeleton
                                        variant="block"
                                        width={70}
                                        height={14}
                                        radius={6}
                                    />
                                ) : (
                                    <>{character?.name}</>
                                )}
                            </span>
                            <span className="px-1.5 py-0.5 rounded bg-primary/25 border border-primary/50 text-secondary text-[11px] leading-none">
                                Lv
                                {loading ? (
                                    <ArcathoriaSkeleton
                                        variant="block"
                                        width={70}
                                        height={14}
                                        radius={6}
                                    />
                                ) : (
                                    <>{character?.level}</>
                                )}
                            </span>
                        </div>

                        <div className="mt-1.5 flex items-center gap-3">
                            <div className="flex items-center gap-1 min-w-[120px]">
                                <Zap className="w-3.5 h-3.5 text-complementary-green" />
                                <MenuCharacterBar value={100} max={100} variant="energy" />
                            </div>
                            <div className="flex items-center gap-1 min-w-[120px]">
                                <Sparkles className="w-3.5 h-3.5 text-complementary-red" />
                                <MenuCharacterBar value={100} max={100} variant="xp" />
                            </div>
                        </div>
                    </div>
                </button>

                <button
                    type="button"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-expanded={mobileOpen}
                    aria-controls="game-mobile-menu"
                    className="cursor-pointer inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/25 border border-primary/80 text-text-light hover:bg-primary/35 hover:border-secondary/60 hover:text-secondary shadow-[0_0_10px_rgba(106,13,173,0.35)] transition shrink-0"
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            <div
                id="game-mobile-menu"
                className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ${
                    mobileOpen ? "max-h-[340px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
                }`}
            >
                <div className="flex flex-wrap items-center gap-2">
                    <div className="w-full inline-flex items-center justify-center gap-2 px-3 py-2">
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-primary/50 bg-black/40 text-text-light shadow-[0_0_8px_rgba(106,13,173,0.2)]">
                            <Coins className="w-4 h-4 text-secondary" />
                            <span className="text-sm font-roboto tabular-nums">0</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-primary/50 bg-black/40 text-text-light shadow-[0_0_8px_rgba(106,13,173,0.2)]">
                            <Gem className="w-4 h-4 text-complementary-blue" />
                            <span className="text-sm font-roboto tabular-nums">0</span>
                        </div>
                    </div>

                    <button
                        onClick={onOpenSettings}
                        className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-primary/60 bg-primary/20 text-text-light hover:bg-primary/30 transition"
                    >
                        <Settings className="w-4 h-4 text-secondary" />
                        <span className="text-sm">Ustawienia</span>
                    </button>
                    <button
                        onClick={onLogout}
                        className="cursor-pointer inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-primary/60 bg-primary/20 text-text-light hover:bg-primary/30 transition"
                    >
                        <LogOut className="w-4 h-4 text-secondary" />
                        <span className="text-sm">Wyloguj</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default GameTopMenuMobile;
