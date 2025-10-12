import { Coins, Droplet, Gem, Heart, LogOut, Menu, Settings, User, X, Zap } from "lucide-react";
import { useState } from "react";

type GameTopMenuMobileProps = {};

const GameTopMenuMobile = ({}: GameTopMenuMobileProps) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
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
                        <div className="text-sm leading-tight truncate">{playerName}</div>
                        <div className="text-[11px] text-text-secondary">Lv {level}</div>
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

            <div
                id="game-mobile-menu"
                className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ${
                    mobileOpen ? "max-h-[340px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
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
                        <span className="tabular-nums">{xpRemaining.toLocaleString()}</span> XP
                    </div>

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
    );
};

export default GameTopMenuMobile;
