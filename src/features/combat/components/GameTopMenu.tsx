import { useMemo, useState } from "react";
import { Coins, Droplet, Gem, Heart, LogOut, Menu, Settings, User, X, Zap } from "lucide-react";
import Tooltip from "@shared/components/Tooltip.tsx";

export type GameTopMenuProps = {
    playerName: string;
    avatarUrl?: string;
    level: number;
    hp: number;
    hpMax: number;
    mp: number;
    mpMax: number;
    energy?: number;
    energyMax?: number;
    xp: number;
    xpToLevel: number;
    gold: number;
    crystals: number;
    unreadMail?: number;
    notifications?: number;
    pingMs?: number;
    serverTime?: string;
    onOpenCharacter: () => void;
    onOpenInventory: () => void;
    onOpenMail: () => void;
    onOpenSettings: () => void;
    onLogout: () => void;
};

const clampPct = (value: number) => Math.max(0, Math.min(100, value));

const Bar = ({
    value,
    max,
    colorFrom,
    colorTo,
    ariaLabel,
}: {
    value: number;
    max: number;
    colorFrom: string;
    colorTo: string;
    ariaLabel: string;
}) => {
    const pct = useMemo(() => clampPct((value / Math.max(max, 1)) * 100), [value, max]);
    return (
        <div
            className="w-full h-2 rounded-full bg-black/40 border border-primary/30 overflow-hidden"
            aria-label={ariaLabel}
        >
            <div
                className="h-full transition-all duration-500 ease-out"
                style={{
                    width: `${pct}%`,
                    background: `linear-gradient(90deg, ${colorFrom}, ${colorTo})`,
                }}
            />
        </div>
    );
};

export default function GameTopMenu(props: GameTopMenuProps) {
    const {
        playerName,
        avatarUrl,
        level,
        hp,
        hpMax,
        mp,
        mpMax,
        energy = 0,
        energyMax = 100,
        xp,
        xpToLevel,
        gold,
        crystals,
        onOpenCharacter,
        onOpenSettings,
        onLogout,
    } = props;

    const [mobileOpen, setMobileOpen] = useState(false);
    const xpPct = useMemo(() => clampPct((xp / Math.max(xpToLevel, 1)) * 100), [xp, xpToLevel]);
    const xpRemaining = Math.max(0, xpToLevel - xp);

    return (
        <>
            <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md">
                <div className="w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 border-b border-primary/40 bg-black/30 shadow-[0_0_22px_rgba(106,13,173,0.35)] relative overflow-hidden">
                    {/* soft runic glow */}
                    <div className="pointer-events-none absolute inset-0 opacity-60">
                        <div className="absolute -inset-12 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 blur-2xl" />
                    </div>

                    {/* DESKTOP / TABLET */}
                    <nav className="relative z-10 hidden lg:grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                        {/* Left: Identity & Vitals + XP obok levela */}
                        <div className="flex items-center gap-3 min-w-0">
                            <button
                                onClick={onOpenCharacter}
                                className="cursor-pointer relative inline-flex items-center gap-3 px-2.5 py-1.5 rounded-xl border border-primary/40 bg-primary/15 text-text-light hover:bg-primary/25 transition shadow-[0_0_10px_rgba(106,13,173,0.25)]"
                            >
                                <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-primary/50">
                                    {avatarUrl ? (
                                        <img
                                            src={avatarUrl}
                                            alt="Avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full grid place-items-center bg-black/40">
                                            <User className="w-5 h-5 text-secondary" />
                                        </div>
                                    )}
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 text-sm font-roboto flex-wrap">
                                        <span className="truncate max-w-[22ch]">{playerName}</span>
                                        <span className="px-1.5 py-0.5 rounded bg-primary/25 border border-primary/50 text-secondary text-[11px] leading-none">
                                            Lv {level}
                                        </span>
                                        <div className="inline-flex items-center gap-2 min-w-[160px]">
                                            <div
                                                className="w-40 h-1.5 rounded-full bg-black/40 border border-primary/30 overflow-hidden"
                                                aria-label="Pasek doświadczenia"
                                            >
                                                <div
                                                    className="h-full bg-gradient-to-r from-secondary/80 to-primary/70"
                                                    style={{ width: `${xpPct}%` }}
                                                />
                                            </div>
                                            <span className="text-[11px] text-text-secondary tabular-nums">
                                                {Math.floor(xpPct)}%
                                            </span>
                                        </div>
                                    </div>

                                    {/* Vitals */}
                                    <div className="mt-1.5 flex items-center gap-3">
                                        <div className="flex items-center gap-1 min-w-[140px]">
                                            <Heart className="w-3.5 h-3.5 text-complementary-red" />
                                            <Bar
                                                value={hp}
                                                max={hpMax}
                                                colorFrom="#e02a2a"
                                                colorTo="#ff6b6b"
                                                ariaLabel="Pasek zdrowia"
                                            />
                                        </div>
                                        <div className="flex items-center gap-1 min-w-[140px]">
                                            <Droplet className="w-3.5 h-3.5 text-complementary-blue" />
                                            <Bar
                                                value={mp}
                                                max={mpMax}
                                                colorFrom="#0645b1"
                                                colorTo="#1a8fe3"
                                                ariaLabel="Pasek many"
                                            />
                                        </div>
                                        <div className="flex items-center gap-1 min-w-[120px]">
                                            <Zap className="w-3.5 h-3.5 text-complementary-green" />
                                            <Bar
                                                value={energy}
                                                max={energyMax}
                                                colorFrom="#388e3c"
                                                colorTo="#66bb6a"
                                                ariaLabel="Pasek energii"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>

                        {/* Middle: currencies — CENTRUM */}
                        <div className="justify-self-center">
                            <div className="flex items-center gap-3">
                                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-primary/50 bg-black/40 text-text-light shadow-[0_0_8px_rgba(106,13,173,0.2)]">
                                    <Coins className="w-4 h-4 text-secondary" />
                                    <span className="text-sm font-roboto tabular-nums">
                                        {gold.toLocaleString()}
                                    </span>
                                </div>
                                <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-primary/50 bg-black/40 text-text-light shadow-[0_0_8px_rgba(106,13,173,0.2)]">
                                    <Gem className="w-4 h-4 text-complementary-blue" />
                                    <span className="text-sm font-roboto tabular-nums">
                                        {crystals.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Controls */}
                        <div className="justify-self-end flex items-center gap-3">
                            <Tooltip title="Ustawienia">
                                <button
                                    onClick={onOpenSettings}
                                    className="cursor-pointer w-10 h-10 rounded-full bg-primary/25 border border-primary/80 text-text-light hover:bg-primary/35 hover:border-secondary/60 hover:text-secondary transition shadow-[0_0_10px_rgba(106,13,173,0.35)]"
                                >
                                    <Settings className="w-5 h-5 m-auto" />
                                </button>
                            </Tooltip>

                            <Tooltip title="Wyloguj">
                                <button
                                    onClick={onLogout}
                                    className="cursor-pointer w-10 h-10 rounded-full bg-primary/25 border border-primary/80 text-text-light hover:bg-primary/35 hover:border-secondary/60 hover:text-secondary transition shadow-[0_0_10px_rgba(106,13,173,0.35)]"
                                >
                                    <LogOut className="w-5 h-5 m-auto" />
                                </button>
                            </Tooltip>
                        </div>
                    </nav>

                    {/* MOBILE */}
                    <nav className="relative z-10 lg:hidden">
                        <div className="flex items-center justify-between gap-2">
                            <button
                                type="button"
                                onClick={onOpenCharacter}
                                className="cursor-pointer inline-flex items-center gap-2 px-2 py-1.5 rounded-xl border border-primary/40 bg-primary/20 text-text-light min-w-0"
                            >
                                <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-primary/50 shrink-0">
                                    {avatarUrl ? (
                                        <img
                                            src={avatarUrl}
                                            alt="Avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full grid place-items-center bg-black/40">
                                            <User className="w-5 h-5 text-secondary" />
                                        </div>
                                    )}
                                </div>
                                <div className="text-left min-w-0">
                                    <div className="text-sm leading-tight truncate">
                                        {playerName}
                                    </div>
                                    <div className="text-[11px] text-text-secondary">
                                        Lv {level}
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
                                {mobileOpen ? (
                                    <X className="w-5 h-5" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </button>
                        </div>

                        {/* XP + vitals */}
                        <div className="mt-2 grid grid-cols-3 gap-2">
                            <div className="flex items-center gap-1">
                                <Heart className="w-3.5 h-3.5 text-complementary-red" />
                                <Bar
                                    value={hp}
                                    max={hpMax}
                                    colorFrom="#e02a2a"
                                    colorTo="#ff6b6b"
                                    ariaLabel="Pasek zdrowia"
                                />
                            </div>
                            <div className="flex items-center gap-1">
                                <Droplet className="w-3.5 h-3.5 text-complementary-blue" />
                                <Bar
                                    value={mp}
                                    max={mpMax}
                                    colorFrom="#0645b1"
                                    colorTo="#1a8fe3"
                                    ariaLabel="Pasek many"
                                />
                            </div>
                            <div className="flex items-center gap-1">
                                <Zap className="w-3.5 h-3.5 text-complementary-green" />
                                <Bar
                                    value={energy}
                                    max={energyMax}
                                    colorFrom="#388e3c"
                                    colorTo="#66bb6a"
                                    ariaLabel="Pasek energii"
                                />
                            </div>
                        </div>

                        {/* mobile sheet */}
                        <div
                            id="game-mobile-menu"
                            className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ${
                                mobileOpen
                                    ? "max-h-[340px] opacity-100 mt-3"
                                    : "max-h-0 opacity-0 mt-0"
                            }`}
                        >
                            <div className="flex flex-wrap items-center gap-2">
                                <div className="w-full inline-flex items-center gap-2">
                                    <div
                                        className="flex-1 h-1.5 rounded-full bg-black/40 border border-primary/30 overflow-hidden"
                                        aria-label="Pasek doświadczenia"
                                    >
                                        <div
                                            className="h-full bg-gradient-to-r from-secondary/80 to-primary/70"
                                            style={{ width: `${xpPct}%` }}
                                        />
                                    </div>
                                    <span className="text-[11px] text-text-secondary tabular-nums">
                                        {Math.floor(xpPct)}%
                                    </span>
                                </div>
                                <div className="w-full text-[11px] text-text-secondary">
                                    Do nast. poziomu:{" "}
                                    <span className="tabular-nums">
                                        {xpRemaining.toLocaleString()}
                                    </span>{" "}
                                    XP
                                </div>

                                {/* CURRENCIES (desktopowy styl, jedna linia) */}
                                <div className="w-full inline-flex items-center justify-center gap-2 px-3 py-2">
                                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-primary/50 bg-black/40 text-text-light shadow-[0_0_8px_rgba(106,13,173,0.2)]">
                                        <Coins className="w-4 h-4 text-secondary" />
                                        <span className="text-sm font-roboto tabular-nums">
                                            {gold.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-primary/50 bg-black/40 text-text-light shadow-[0_0_8px_rgba(106,13,173,0.2)]">
                                        <Gem className="w-4 h-4 text-complementary-blue" />
                                        <span className="text-sm font-roboto tabular-nums">
                                            {crystals.toLocaleString()}
                                        </span>
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
                </div>
            </header>
        </>
    );
}
