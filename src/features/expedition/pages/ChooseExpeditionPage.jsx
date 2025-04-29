import GameLayout from "../../../layouts/GameLayout.jsx";
import { bgImages } from "../../../layouts/backgroundImages.js";
import ForestIcon from "../assets/icons/forest.png";
import MountainIcon from "../assets/icons/mountain.png";
import RuinsIcon from "../assets/icons/ruins.png";
import VulcanIcon from "../assets/icons/vulcan.png";
import ExpeditionIcon from "../components/ExpeditionIcon.jsx";
import ExpeditionModal from "../components/ExpeditionModal.jsx";
import { useState } from "react";
import TeleportOverlay from "../components/TeleportOverlay.jsx";

const exampleExpedition = {
    name: "Firelands",
    story: "Dawno temu płomienie pochłonęły tę krainę...",
    difficulty: "Trudny",
    bonuses: ["+10% Fire Resistance", "+5% Mana Regen"],
    penalties: ["-10% Ice Resistance", "-5% HP"],
    characteristics: "Skrajnie gorące tereny, dominują ogniste kreatury.",
};

const ChooseExpeditionPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTeleporting, setIsTeleporting] = useState(false);

    const startFight = () => {
        setIsTeleporting(true);
    };

    const handleTeleportEnd = () => {
        setIsTeleporting(false);
    };

    return (
        <GameLayout background={bgImages.expeditionDashboard}>
            <div className="relative">
                <ExpeditionIcon
                    url={ForestIcon}
                    alt="Biom leśny"
                    positionX={180}
                    positionY={20}
                    biomeName="Las"
                    action={() => setIsModalOpen(true)}
                />
                <ExpeditionIcon
                    url={RuinsIcon}
                    alt="Biom ruin"
                    positionX={1100}
                    positionY={20}
                    biomeName="Ruiny"
                    action={() => setIsModalOpen(true)}
                />
                <ExpeditionIcon
                    url={MountainIcon}
                    alt="Biom gór"
                    positionX={750}
                    positionY={450}
                    biomeName="Góry"
                    action={() => setIsModalOpen(true)}
                />
                <ExpeditionIcon
                    url={VulcanIcon}
                    alt="Biom wulkanu"
                    positionX={1250}
                    positionY={350}
                    biomeName="Wulkan"
                    action={() => setIsModalOpen(true)}
                />
            </div>

            <ExpeditionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                expedition={exampleExpedition}
                onStartFight={() => {
                    setIsModalOpen(false);
                    startFight();
                }}
            />

            {isTeleporting && <TeleportOverlay onAnimationEnd={handleTeleportEnd} />}
        </GameLayout>
    );
};

export default ChooseExpeditionPage;
