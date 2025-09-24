import GameLayout from "../../../layouts/GameLayout.jsx";
import { bgImages } from "../../../layouts/backgroundImages.js";
import CharacterCard from "../../../components/cards/CharacterCard.jsx";
import PulseVsWithLineBanner from "../../../components/banners/PulseVsWithLineBanner.jsx";
import { useEffect, useState } from "react";
import ActionBar from "../components/bar/ActionBar.jsx";
import EscapeAction from "../components/bar/buttons/EscapeAction.jsx";
import WandAttackAction from "../components/bar/buttons/WandAttackAction.jsx";
import { useParams } from "react-router-dom";

const CombatPage = () => {
    const { combatId } = useParams();
    const [combat, setCombat] = useState({});
    const [opponentHit, setOpponentHit] = useState(false);

    useEffect(() => {}, []);

    const onAttack = () => {
        setOpponentHit(true);
    };

    const handleHitEnd = () => {
        setOpponentHit(false);
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
                        isHit={opponentHit}
                        onHitEnd={handleHitEnd}
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
