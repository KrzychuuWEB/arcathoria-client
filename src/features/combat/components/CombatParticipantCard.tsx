import { cn } from "@shared/libs/cn";
import { StatusBar } from "@shared/components/statusBar";
import { ShieldCheck, Skull } from "lucide-react";
import { TimerRing } from "@features/combat/components/CombatTimerRing.tsx";
import { FloatingEffectsHost } from "@shared/components/floatingEffect";
import type { EffectItem } from "@shared/components/floatingEffect/FloatingEffect.tsx";
import type { Participant } from "@domain/combat/types.ts";

type Role = "player" | "enemy";

type CombatParticipantCardProps = {
    role: Role;
    participant: Participant;
    turnProgress?: number;
    isActiveTurn?: boolean;
    effects?: EffectItem[];
};

export const CombatParticipantCard = ({
    role,
    participant,
    turnProgress = 0,
    isActiveTurn = false,
    effects,
}: CombatParticipantCardProps) => {
    const isEnemy = role === "enemy";
    const RoleIcon = isEnemy ? Skull : ShieldCheck;

    const ringColor = isEnemy ? "text-complementary-red-600" : "text-secondary";

    return (
        <div
            className={cn("flex items-center gap-4", isEnemy && "flex-row-reverse text-right")}
            aria-label={isEnemy ? "Przeciwnik" : "Gracz"}
        >
            <div className="relative">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                    <img
                        src={"/default_avatar.png"}
                        alt={participant.id}
                        className="w-full h-full rounded-full border border-primary/40 object-cover"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 opacity-60 blur-md" />
                    {!!effects?.length && <FloatingEffectsHost effects={effects} />}
                </div>

                <div className="absolute inset-0 -m-1 grid place-items-center pointer-events-none">
                    <TimerRing
                        progress={turnProgress}
                        size={isEnemy ? 88 : 88}
                        stroke={4}
                        colorClass={ringColor}
                        trackClassName="text-black/50"
                        active={isActiveTurn}
                    />
                </div>
            </div>

            <div className="flex-1 min-w-0">
                <h3 className="font-cinzel text-text-light text-lg truncate">
                    <span className="align-middle">{participant.id}</span>{" "}
                    <span className="text-text-secondary align-middle">Lv. {0}</span>
                    <span
                        className={cn(
                            "ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] border align-middle",
                            isEnemy
                                ? "bg-complementary-red/10 border-complementary-red/40 text-complementary-red"
                                : "bg-secondary/15 border-secondary/40 text-secondary",
                            isEnemy && "ml-0 mr-2",
                        )}
                    >
                        <RoleIcon className="w-3.5 h-3.5" />
                        {isEnemy ? "Wróg" : "Ty"}
                    </span>
                </h3>

                <div className="mt-2 space-y-2">
                    <StatusBar
                        value={participant.health.value}
                        max={participant.health.max}
                        variant="hp"
                    />
                    <StatusBar value={0} max={0} variant="mana" />
                </div>
            </div>
        </div>
    );
};
