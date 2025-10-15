import { useEffect, useState } from "react";
import { CombatLog } from "@features/combat/components/CombatLog.tsx";
import { CombatBasicActions } from "@features/combat/components/CombatBasicActions.tsx";
import { CombatSpells } from "@features/combat/components/CombatSpells.tsx";
import { CombatParticipantCard } from "@features/combat/components/CombatParticipantCard.tsx";
import BlurContainer from "@shared/components/BlurContainer.tsx";
import { useFloatingEffects } from "@shared/hooks/useFloatingEffect.ts";

type Entity = {
    id: string;
    name: string;
    avatar: string;
    level: number;
    hp: number;
    hpMax: number;
    mp: number;
    mpMax: number;
    status?: { label: string; kind: "buff" | "debuff" }[];
};

const CombatPage = () => {
    const [player, setPlayer] = useState<Entity>({
        id: "p1",
        name: "Elyndra",
        avatar: "/default_avatar.png",
        level: 27,
        hp: 180,
        hpMax: 220,
        mp: 95,
        mpMax: 120,
        status: [{ label: "Bariera Runiczna", kind: "buff" }],
    });
    const [turn, setTurn] = useState<"player" | "enemy">("enemy");
    const [turnTime, setTurnTime] = useState(100);
    const enemyEffects = useFloatingEffects();

    useEffect(() => {
        const interval = setInterval(() => {
            setTurnTime((t) => {
                if (t <= 0) {
                    setTurn((prev) => (prev === "player" ? "enemy" : "player"));
                    return 100;
                }
                return t - 1;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const performBasicAttack = () => {
        enemyEffects.addEffect({ variant: "damage", value: 100 });
    };

    return (
        <div className="mt-20 flex items-start lg:items-center justify-center px-4 sm:px-6 py-6">
            <div className="w-full max-w-6xl grid gap-6 lg:grid-cols-[1fr_360px]">
                <section className="space-y-4">
                    <BlurContainer>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <CombatParticipantCard
                                role="player"
                                name={player.name}
                                avatar={player.avatar}
                                level={player.level}
                                hp={player.hp}
                                hpMax={player.hpMax}
                                mp={player.mp}
                                mpMax={player.mpMax}
                            />

                            <CombatParticipantCard
                                role="enemy"
                                name={player.name}
                                avatar={"/wolf.png"}
                                level={player.level}
                                hp={player.hp}
                                hpMax={player.hpMax}
                                mp={player.mp}
                                mpMax={player.mpMax}
                                isActiveTurn={turn === "enemy"}
                                turnProgress={turn === "enemy" ? turnTime / 100 : 0}
                                effects={enemyEffects.effects}
                            />
                        </div>
                    </BlurContainer>

                    <CombatSpells />

                    <CombatBasicActions handleBasicAction={performBasicAttack} />
                </section>

                <CombatLog />
            </div>
        </div>
    );
};

export default CombatPage;
