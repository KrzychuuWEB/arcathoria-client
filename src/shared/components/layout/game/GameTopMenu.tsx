import { Coins, Gem, LogOut, Settings, Sparkles, User, Zap } from "lucide-react";
import Tooltip from "@shared/components/Tooltip.tsx";
import GameTopMenuMobile from "@shared/components/layout/game/GameTopMenuMobile.tsx";
import { MenuCharacterBar } from "@shared/components/layout/game/MenuCharacterBar.tsx";

export type CharacterDataTypes = {
    playerName: string;
    avatarUrl: string;
    level: number;
    energy: number;
    energyMax: number;
    xp: number;
    xpToLevel: number;
    gold: number;
    crystals: number;
};

const CharacterDefaultData: CharacterDataTypes = {
    playerName: "Player name",
    avatarUrl: "/default_avatar.png",
    level: 1,
    energy: 50,
    energyMax: 100,
    xp: 50,
    xpToLevel: 100,
    gold: 0,
    crystals: 0,
};

const GameTopMenu = () => {
    const onOpenCharacter = () => {
        console.log("Open character");
    };

    const onOpenSettings = () => {
        console.log("Open settings");
    };

    const onLogout = () => {
        console.log("Logout");
    };

    return (
        <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md">
            <div className="w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 border-b border-primary/40 bg-black/30 shadow-[0_0_22px_rgba(106,13,173,0.35)] relative overflow-hidden">
                <nav className="relative z-10 hidden sm:flex sm:items-center sm:justify-between sm:gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-3">
                    <div className="flex items-center gap-3 min-w-0 justify-self-start">
                        <button
                            onClick={onOpenCharacter}
                            className="cursor-pointer relative inline-flex items-center gap-3 px-2.5 py-1.5 rounded-xl border border-primary/40 bg-primary/15 text-text-light hover:bg-primary/25 transition shadow-[0_0_10px_rgba(106,13,173,0.25)]"
                        >
                            <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-primary/50">
                                {CharacterDefaultData.avatarUrl ? (
                                    <img
                                        src={CharacterDefaultData.avatarUrl}
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
                                    <span className="truncate max-w-[22ch]">
                                        {CharacterDefaultData.playerName}
                                    </span>
                                    <span className="px-1.5 py-0.5 rounded bg-primary/25 border border-primary/50 text-secondary text-[11px] leading-none">
                                        Lv {CharacterDefaultData.level}
                                    </span>
                                </div>

                                <div className="mt-1.5 flex items-center gap-3">
                                    <div className="flex items-center gap-1 min-w-[120px]">
                                        <Zap className="w-3.5 h-3.5 text-complementary-green" />
                                        <MenuCharacterBar
                                            value={CharacterDefaultData.energy}
                                            max={CharacterDefaultData.energyMax}
                                            variant="energy"
                                        />
                                    </div>
                                    <div className="flex items-center gap-1 min-w-[120px]">
                                        <Sparkles className="w-3.5 h-3.5 text-complementary-red" />
                                        <MenuCharacterBar
                                            value={CharacterDefaultData.xp}
                                            max={CharacterDefaultData.xpToLevel}
                                            variant="xp"
                                        />
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div className="flex items-center gap-3 sm:ml-4 justify-self-start lg:justify-self-center">
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-primary/50 bg-black/40 text-text-light shadow-[0_0_8px_rgba(106,13,173,0.2)]">
                            <Coins className="w-4 h-4 text-secondary" />
                            <span className="text-sm font-roboto tabular-nums">
                                {CharacterDefaultData.gold.toLocaleString()}
                            </span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-primary/50 bg-black/40 text-text-light shadow-[0_0_8px_rgba(106,13,173,0.2)]">
                            <Gem className="w-4 h-4 text-complementary-blue" />
                            <span className="text-sm font-roboto tabular-nums">
                                {CharacterDefaultData.crystals.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 justify-self-end">
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

                <GameTopMenuMobile
                    character={CharacterDefaultData}
                    onOpenCharacter={onOpenCharacter}
                    onOpenSettings={onOpenSettings}
                    onLogout={onLogout}
                />
            </div>
        </header>
    );
};

export default GameTopMenu;
