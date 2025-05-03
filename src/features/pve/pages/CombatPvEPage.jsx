import GameLayout from "../../../layouts/GameLayout.jsx";
import { bgImages } from "../../../layouts/backgroundImages.js";
import CharacterCard from "../../../components/cards/CharacterCard.jsx";
import useSelectedCharacter from "../../../hooks/useSelectedCharacter.jsx";
import PulseVsWithLineBanner from "../../../components/banners/PulseVsWithLineBanner.jsx";

const CombatPvEPage = () => {
    const { character } = useSelectedCharacter();

    return (
        <GameLayout background={bgImages.forestCombat}>
            <CharacterCard
                resource={{
                    avatar: "../default_avatar.png",
                    name: character.characterName,
                    hp: 100,
                    maxHp: 100,
                    level: 1,
                }}
            />

            <PulseVsWithLineBanner />

            <CharacterCard
                resource={{
                    avatar: "../wolf.png",
                    name: "Wilk",
                    hp: 150,
                    maxHp: 150,
                    level: 2,
                }}
            />
        </GameLayout>
    );
};

export default CombatPvEPage;
