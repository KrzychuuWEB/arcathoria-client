import GameLayout from "../../../layouts/GameLayout.jsx";
import { bgImages } from "../../../layouts/backgroundImages.js";
import CharacterCard from "../../../components/cards/CharacterCard.jsx";
import PulseVsWithLineBanner from "../../../components/banners/PulseVsWithLineBanner.jsx";
import { useEffect, useState } from "react";
import ActionBar from "../components/bar/ActionBar.jsx";
import EscapeAction from "../components/bar/buttons/EscapeAction.jsx";
import WandAttackAction from "../components/bar/buttons/WandAttackAction.jsx";
import { useNavigate, useParams } from "react-router-dom";
import combatService from "../../../api/services/combatService.js";
import useNotification from "../../../hooks/useNotification.jsx";
import { paths } from "../../../routes/paths.js";
import { useCombatEffects } from "../../../hooks/useCombatEffects.jsx";

const CombatPage = () => {
    const { combatId } = useParams();
    const [combat, setCombat] = useState({});
    const playerEffects = useCombatEffects();
    const enemyEffects = useCombatEffects();
    const { errorNotification } = useNotification();
    const navigate = useNavigate();

    useEffect(() => {}, []);

    const onAttack = () => {
        combatService
            .performAction({ combatId: combatId, actionType: "melee" }, combatId)
            .then((response) => {
                if (response.success) {
                    console.log(response);
                    enemyEffects.triggerEffects([{ type: "damage", value: "-124" }]);
                }

                if (!response.success) {
                    switch (response.code) {
                        case "ERR_COMBAT_PARTICIPANT_NOT_FOUND_IN_COMBAT":
                            errorNotification("Uczestnik nie jest przypisany do tej walki!");
                            navigate(paths.home);
                            break;
                        case "ERR_COMBAT_ACTION_TYPE":
                            errorNotification("Błędy typ akcji!");
                            break;
                        case "ERR_COMBAT_NOT_FOUND-404":
                            errorNotification("Nie znaleziono walki!");
                            navigate(paths.home);
                            break;
                        case "ERR_COMBAT_ALREADY_FINISHED":
                            errorNotification("Nie możesz wykonać ruchu na zakończonej walce!");
                            navigate(paths.home);
                            break;
                        case "ERR_COMBAT_WRONG_TURN":
                            errorNotification("Aktualnie jest tura przeciwnika!");
                            break;
                    }
                }
            });
    };

    return (
        <GameLayout background={bgImages.forestCombat}>
            <div className="flex flex-col items-center mt-10">
                <div className="relative">
                    <CharacterCard
                        resource={{
                            avatar: "/default_avatar.png",
                            name: "character.characterName",
                            hp: 1,
                            maxHp: 1,
                            level: 1,
                        }}
                    />

                    <div className="absolute -left-14 top-2">
                        <ActionBar>
                            <EscapeAction onClick={() => console.log("ucieczka")} />
                        </ActionBar>
                    </div>
                </div>

                <PulseVsWithLineBanner />

                <div className="relative">
                    <CharacterCard
                        resource={{
                            avatar: "/wolf.png",
                            name: "monster.name",
                            hp: 1,
                            maxHp: 1,
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
            </div>
        </GameLayout>
    );
};

export default CombatPage;
