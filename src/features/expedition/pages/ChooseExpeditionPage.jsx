import { useEffect, useState } from "react";
import GameLayout from "../../../layouts/GameLayout.jsx";
import { bgImages } from "../../../layouts/backgroundImages.js";
import ForestIcon from "../assets/icons/forest.png";
import MountainIcon from "../assets/icons/mountain.png";
import RuinsIcon from "../assets/icons/ruins.png";
import VulcanIcon from "../assets/icons/vulcan.png";
import ExpeditionIcon from "../components/ExpeditionIcon.jsx";
import ExpeditionModal from "../components/ExpeditionModal.jsx";
import TeleportOverlay from "../components/TeleportOverlay.jsx";
import { expeditionInMemory } from "../../../inMemoryDB/expedition.js";

const ChooseExpeditionPage = () => {
    const [expeditionModal, setExpeditionModal] = useState({ open: false, expedition: null });
    const [isTeleporting, setIsTeleporting] = useState(false);
    const [expeditions, setExpeditions] = useState([]);

    useEffect(() => {
        setExpeditions(expeditionInMemory);
    }, []);

    const startFight = () => {
        setIsTeleporting(true);
    };

    const handleTeleportEnd = () => {
        setIsTeleporting(false);
    };

    const getExpeditionByCode = (code) => {
        return expeditions.find((expedition) => expedition.code === code) || null;
    };

    const openExpeditionModal = (expeditionData) => {
        setExpeditionModal({ open: true, expedition: expeditionData });
    };

    const closeExpeditionModal = () => {
        setExpeditionModal({ open: false, expedition: null });
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
                    action={() => openExpeditionModal(getExpeditionByCode("forest"))}
                />
                <ExpeditionIcon
                    url={RuinsIcon}
                    alt="Biom ruin"
                    positionX={1100}
                    positionY={20}
                    biomeName="Ruiny"
                    action={() => openExpeditionModal(getExpeditionByCode("ruins"))}
                />
                <ExpeditionIcon
                    url={MountainIcon}
                    alt="Biom gór"
                    positionX={750}
                    positionY={450}
                    biomeName="Góry"
                    action={() => openExpeditionModal(getExpeditionByCode("mountains"))}
                />
                <ExpeditionIcon
                    url={VulcanIcon}
                    alt="Biom wulkanu"
                    positionX={1250}
                    positionY={350}
                    biomeName="Wulkan"
                    action={() => openExpeditionModal(getExpeditionByCode("vulcan"))}
                />
            </div>

            <ExpeditionModal
                isOpen={expeditionModal.open}
                onClose={() => closeExpeditionModal()}
                expedition={expeditionModal.expedition}
                onStartFight={() => {
                    closeExpeditionModal();
                    startFight();
                }}
            />

            {isTeleporting && <TeleportOverlay onAnimationEnd={handleTeleportEnd} />}
        </GameLayout>
    );
};

export default ChooseExpeditionPage;
