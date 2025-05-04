import GameLayout from "../../../layouts/GameLayout.jsx";
import { bgImages } from "../../../layouts/backgroundImages.js";
import CharacterCard from "../../../components/cards/CharacterCard.jsx";
import useSelectedCharacter from "../../../hooks/useSelectedCharacter.jsx";
import PulseVsWithLineBanner from "../../../components/banners/PulseVsWithLineBanner.jsx";
import { useEffect, useState } from "react";
import { monsters } from "../../../inMemoryDB/monster.js";
import ActionBar from "../components/bar/ActionBar.jsx";
import EscapeAction from "../components/bar/buttons/EscapeAction.jsx";
import WandAttackAction from "../components/bar/buttons/WandAttackAction.jsx";

const CombatPvEPage = () => {
    const { character } = useSelectedCharacter();
    const [monster, setMonster] = useState({});
    const [opponentHit, setOpponentHit] = useState(false);

    useEffect(() => {
        const target = monsters.find((m) => m.name === "Wilk");
        setMonster(target);
    }, []);

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
                            avatar: "../default_avatar.png",
                            name: character.characterName,
                            hp: character.health,
                            maxHp: character.health,
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
                            avatar: "../wolf.png",
                            name: monster.name,
                            hp: monster.hp,
                            maxHp: monster.hp,
                            level: monster.level,
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

export default CombatPvEPage;
