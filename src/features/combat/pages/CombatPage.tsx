import { useEffect, useState } from "react";
import { CombatLog } from "@features/combat/components/CombatLog.tsx";
import { CombatBasicActions } from "@features/combat/components/CombatBasicActions.tsx";
import { CombatSpells } from "@features/combat/components/CombatSpells.tsx";
import { CombatParticipantCard } from "@features/combat/components/CombatParticipantCard.tsx";
import BlurContainer from "@shared/components/BlurContainer.tsx";
import { useFloatingEffects } from "@shared/hooks/useFloatingEffect.ts";
import type { Participant } from "@/domain/combat/types.ts";

const CombatPage = () => {
    const [player, setPlayer] = useState<Participant>({
        id: "123",
        health: { value: 100, max: 100 },
    });

    const [enemy, setEnemy] = useState<Participant>({
        id: "321",
        health: { value: 50, max: 50 },
    });

    useEffect(() => {
        setPlayer({
            id: "123",
            health: { value: 100, max: 100 },
        });
        setEnemy({
            id: "321",
            health: { value: 100, max: 100 },
        });
    }, []);

    const enemyEffects = useFloatingEffects();

    const performBasicAttack = () => {
        enemyEffects.addEffect({ variant: "damage", value: 100 });
    };

    return (
        <div className="flex items-start lg:items-center justify-center px-4 sm:px-6 py-6">
            <div className="w-full max-w-6xl grid gap-6 lg:grid-cols-[1fr_360px]">
                <section className="space-y-4">
                    <BlurContainer>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <CombatParticipantCard
                                role="player"
                                name="brak danych"
                                avatar={"/default_avatar.png"}
                                level={0}
                                hp={player.health.value}
                                hpMax={player.health.max}
                                mp={0}
                                mpMax={0}
                            />

                            <CombatParticipantCard
                                role="enemy"
                                name="brak danych"
                                avatar={"/default_avatar.png"}
                                level={0}
                                hp={enemy.health.value}
                                hpMax={enemy.health.max}
                                mp={0}
                                mpMax={0}
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
