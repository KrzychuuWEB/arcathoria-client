import BlurContainer from "@shared/components/BlurContainer.tsx";
import { Coins, Gem, User } from "lucide-react";
import { StatusBar } from "@shared/components/statusBar";
import type { Character } from "@domain/character/types.ts";
import { ArcathoriaSkeleton } from "@shared/components/ArcathoriaSkeleton.tsx";

type CharacterContainerProps = {
    character?: Character | null;
    loading: boolean;
};

export const CharacterContainer = ({ character, loading }: CharacterContainerProps) => {
    return (
        <BlurContainer>
            <div className="flex items-start gap-5">
                <div className="relative shrink-0 group">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border border-primary/40 shadow-[0_0_24px_rgba(106,13,173,0.25)] transition-transform duration-300 group-hover:scale-105">
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

                    <div className="mt-3 flex flex-col items-center gap-2">
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-primary/50 bg-black/40 text-text-light shadow-[0_0_8px_rgba(106,13,173,0.2)] backdrop-blur-sm">
                            <Coins className="w-4 h-4 text-secondary" />
                            <span className="text-sm font-roboto tabular-nums">0</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-primary/50 bg-black/40 text-text-light shadow-[0_0_8px_rgba(106,13,173,0.2)] backdrop-blur-sm">
                            <Gem className="w-4 h-4 text-complementary-blue-600" />
                            <span className="text-sm font-roboto tabular-nums">0</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 min-w-0">
                    <h1 className="font-cinzel text-text-light text-2xl md:text-3xl truncate">
                        {loading ? (
                            <ArcathoriaSkeleton variant="block" width={70} height={14} radius={6} />
                        ) : (
                            <>{character?.name}</>
                        )}
                        <span className="ml-2 text-text-secondary text-base align-middle">
                            Lv.{" "}
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
                    </h1>

                    <p className="text-sm text-text-secondary mt-1 truncate">Młody adept magii</p>

                    <div className="mt-3 grid gap-2">
                        {loading ? (
                            <ArcathoriaSkeleton
                                variant="block"
                                width="100%"
                                height={14}
                                radius={6}
                            />
                        ) : (
                            <StatusBar
                                value={character?.hp || 0}
                                max={character?.hp || 0}
                                variant="hp"
                            />
                        )}
                        <StatusBar value={0} max={100} variant="mana" />
                        <StatusBar value={0} max={100} variant="xp" />
                        <StatusBar value={0} max={100} variant="stamina" />
                    </div>
                </div>
            </div>
        </BlurContainer>
    );
};
