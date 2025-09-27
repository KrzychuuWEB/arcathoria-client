import GameLayout from "../../../layouts/GameLayout.jsx";
import { bgImages } from "../../../layouts/backgroundImages.js";
import CharacterCard from "../../../components/cards/CharacterCard.jsx";
import PulseVsWithLineBanner from "../../../components/banners/PulseVsWithLineBanner.jsx";
import { useEffect, useState } from "react";
import ActionBar from "../components/bar/ActionBar.jsx";
import EscapeAction from "../components/bar/buttons/EscapeAction.jsx";
import WandAttackAction from "../components/bar/buttons/WandAttackAction.jsx";
import { useParams } from "react-router-dom";
import combatService from "../../../api/services/combatService.js";
import { useCombatEffects } from "../../../hooks/useCombatEffects.jsx";
import useSelectedCharacter from "../../../hooks/useSelectedCharacter.jsx";
import { useCombatErrors } from "../../../api/errors/combatErrors.jsx";

const CombatPage = () => {
    const { combatId } = useParams();
    const [combat, setCombat] = useState(null);
    const { character } = useSelectedCharacter();
    const enemyEffects = useCombatEffects();
    const [loading, setLoading] = useState(false);
    const { handleCombatErrors } = useCombatErrors();

    useEffect(() => {
        setLoading(true);

        combatService
            .getCombatById(combatId)
            .then((response) => {
                if (response.success) {
                    setCombat(response.data);
                }

                if (!response.success) {
                    handleCombatErrors(response.code);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [combatId]);

    const onAttack = () => {
        combatService
            .performAction({ combatId: combatId, actionType: "melee" }, combatId)
            .then((response) => {
                if (response.success) {
                    setCombat(response.data);
                    enemyEffects.triggerEffects([
                        {
                            type: "damage",
                            value: combat.defender.currentHp - response.data.defender.currentHp,
                        },
                    ]);
                }

                if (!response.success) {
                    handleCombatErrors(response.code);
                }
            });
    };

    const getPlayer = () => {
        if (!combat || !combat.attacker || !combat.defender) return null;
        return combat.attacker.id === character.id ? combat.attacker : combat.defender;
    };

    const getOpponent = () => {
        if (!combat || !combat.attacker || !combat.defender) return null;
        return combat.attacker.id !== character.id ? combat.attacker : combat.defender;
    };

    return (
        <GameLayout background={bgImages.forestCombat}>
            {loading || !combat ? (
                <div>Ładowanie...</div>
            ) : (
                <div className="flex flex-col items-center mt-10">
                    {getPlayer() && (
                        <div className="relative">
                            <CharacterCard
                                resource={{
                                    avatar: "/default_avatar.png",
                                    name: getPlayer().id,
                                    hp: getPlayer().currentHp,
                                    maxHp: getPlayer().maxHp,
                                    level: 1,
                                }}
                            />
                            <div className="absolute -left-14 top-2">
                                <ActionBar>
                                    <EscapeAction onClick={() => console.log("ucieczka")} />
                                </ActionBar>
                            </div>
                        </div>
                    )}

                    <PulseVsWithLineBanner />

                    {getOpponent() && (
                        <div className="relative">
                            <CharacterCard
                                resource={{
                                    avatar: "/wolf.png",
                                    name: getOpponent().id,
                                    hp: getOpponent().currentHp,
                                    maxHp: getOpponent().maxHp,
                                    level: 1,
                                }}
                                isHit={enemyEffects.isHit}
                                effects={enemyEffects.effects}
                                onHitEnd={enemyEffects.onHitEnd}
                            />
                            <div className="absolute -right-14 top-2">
                                <ActionBar>
                                    <WandAttackAction onClick={onAttack} isActive={true} />
                                </ActionBar>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </GameLayout>
    );
};

export default CombatPage;
