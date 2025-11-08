import { useEffect } from "react";
import { CombatLog } from "@features/combat/components/CombatLog.tsx";
import { CombatBasicActions } from "@features/combat/components/CombatBasicActions.tsx";
import { CombatSpells } from "@features/combat/components/CombatSpells.tsx";
import { CombatParticipantCard } from "@features/combat/components/CombatParticipantCard.tsx";
import BlurContainer from "@shared/components/BlurContainer.tsx";
import { useFloatingEffects } from "@shared/hooks/useFloatingEffect.ts";
import { useParams } from "react-router-dom";
import { useApiErrorHandler } from "@api/errors/useApiErrorHandler.ts";
import { useSelectedCharacter } from "@api/queries/character/queries.ts";
import { useCombatById } from "@api/queries/combat/queries.ts";
import type { CombatResultDTO, ExecuteActionDTO } from "@api/orval.schemas.ts";
import { getGetCombatQueryKey, usePerformActionInCombat } from "@api/orval.ts";
import { queryClient } from "@shared/libs/query.ts";
import { mapCombatResultDTO } from "@domain/combat/mapper.ts";
import { getPerspective } from "@shared/libs/combat/combatPerspective.ts";

const CombatPage = () => {
    const { id } = useParams();
    const combatId = id || "";
    const handleApiError = useApiErrorHandler();
    const {
        data: character,
        isLoading: isLoadingCharacter,
        isFetching: isFetchingCharacter,
    } = useSelectedCharacter();
    const { data: combat, isLoading, isFetching, isError, error } = useCombatById(combatId);
    const loading = isLoading || isFetching || isLoadingCharacter || isFetchingCharacter;
    const enemyEffects = useFloatingEffects();

    useEffect(() => {
        if (isError && error) {
            handleApiError(error);
        }
    }, [isError, error, handleApiError]);

    const performActionInCombatMutation = usePerformActionInCombat({
        mutation: {
            onSuccess: (data) => {
                const newCombat = mapCombatResultDTO(data);

                if (!combat || !character) {
                    throw Error("combat or character should be defined");
                }

                const perspectiveForOldState = getPerspective(combat, character.id);
                const perspectiveForNewState = getPerspective(newCombat, character.id);

                enemyEffects.addEffect({
                    variant: "damage",
                    value:
                        perspectiveForOldState.enemy.health.value -
                        perspectiveForNewState.enemy.health.value,
                });

                queryClient.setQueryData<CombatResultDTO>(getGetCombatQueryKey(combatId), data);
            },
            onError: (error) => handleApiError(error),
        },
    });

    const performBasicAttack = () => {
        const payload: ExecuteActionDTO = {
            combatId: combatId,
            actionType: "MELEE",
        };

        performActionInCombatMutation.mutate({ id: combatId, data: payload });
    };

    const loadingPerformAttack = performActionInCombatMutation.isPending;

    if (loading || !combat || !character) {
        return <div className="flex justify-center items-center h-screen">Loading</div>;
    }

    const { player, enemy, playerSide, enemySide } = getPerspective(combat, character.id);

    return (
        <div className="flex items-start lg:items-center justify-center px-4 sm:px-6 py-6">
            <div className="w-full max-w-6xl grid gap-6 lg:grid-cols-[1fr_360px]">
                <section className="space-y-4">
                    <BlurContainer>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <CombatParticipantCard
                                role="player"
                                participant={player}
                                turnProgress={playerSide === combat.combatSide ? 1 : 0}
                                isActiveTurn={playerSide === combat.combatSide}
                            />

                            <CombatParticipantCard
                                role="enemy"
                                participant={enemy}
                                isActiveTurn={enemySide === combat.combatSide}
                                turnProgress={enemySide === combat.combatSide ? 1 : 0}
                                effects={enemyEffects.effects}
                            />
                        </div>
                    </BlurContainer>

                    <CombatSpells />

                    <CombatBasicActions
                        loading={loadingPerformAttack}
                        handleBasicAction={performBasicAttack}
                    />
                </section>

                <CombatLog />
            </div>
        </div>
    );
};

export default CombatPage;
