import { Coins, Gem, LogOut, Settings, Sparkles, User, Zap } from "lucide-react";
import Tooltip from "@shared/components/Tooltip.tsx";
import GameTopMenuMobile from "@shared/components/layout/game/GameTopMenuMobile.tsx";
import { MenuCharacterBar } from "@shared/components/layout/game/MenuCharacterBar.tsx";
import { useRemoveSelectedCharacter } from "@api/orval.ts";
import { setAuthSession } from "@app/guard/query.ts";
import { routes } from "@app/routes.ts";
import { useNavigate } from "react-router-dom";
import useNotification from "@shared/hooks/useNotification.ts";
import { useApiErrorHandler } from "@api/errors/useApiErrorHandler.ts";
import { useSelectedCharacter } from "@api/queries/character/queries.ts";
import { useEffect } from "react";
import { ArcathoriaSkeleton } from "@shared/components/ArcathoriaSkeleton.tsx";

const GameTopMenu = () => {
    const navigate = useNavigate();
    const { successNotify } = useNotification();
    const handleApiError = useApiErrorHandler();

    const { data: character, isLoading, isFetching, isError, error } = useSelectedCharacter();
    const loading = isLoading || isFetching;

    const { mutate: doLogout } = useRemoveSelectedCharacter({
        mutation: {
            onSuccess: async () => {
                setAuthSession();
                successNotify("Postać została wylogowana");
                navigate(routes.character.list);
            },
            onError: (error) => handleApiError(error),
        },
    });

    useEffect(() => {
        if (isError && error) {
            handleApiError(error);
        }
    }, [isError, error, handleApiError]);

    const onOpenCharacter = () => {
        console.log("Open character");
    };

    const onOpenSettings = () => {
        console.log("Open settings");
    };

    const onLogout = () => {
        doLogout();
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
                                {loading ? (
                                    <ArcathoriaSkeleton
                                        variant="block"
                                        width={70}
                                        height={70}
                                        radius={60}
                                    />
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
                                        Lv{" "}
                                        {loading ? (
                                            <ArcathoriaSkeleton
                                                variant="block"
                                                width={20}
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
                                        <Zap className="w-3.5 h-3.5 text-secondary" />
                                        <MenuCharacterBar value={100} max={100} variant="energy" />
                                    </div>
                                    <div className="flex items-center gap-1 min-w-[120px]">
                                        <Sparkles className="w-3.5 h-3.5 text-complementary-red" />
                                        <MenuCharacterBar value={100} max={100} variant="xp" />
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div className="flex items-center gap-3 sm:ml-4 justify-self-start lg:justify-self-center">
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-primary/50 bg-black/40 text-text-light shadow-[0_0_8px_rgba(106,13,173,0.2)]">
                            <Coins className="w-4 h-4 text-secondary" />
                            <span className="text-sm font-roboto tabular-nums">0</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-primary/50 bg-black/40 text-text-light shadow-[0_0_8px_rgba(106,13,173,0.2)]">
                            <Gem className="w-4 h-4 text-complementary-blue" />
                            <span className="text-sm font-roboto tabular-nums">0</span>
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
                    character={character}
                    loading={loading}
                    onOpenCharacter={onOpenCharacter}
                    onOpenSettings={onOpenSettings}
                    onLogout={onLogout}
                />
            </div>
        </header>
    );
};

export default GameTopMenu;
