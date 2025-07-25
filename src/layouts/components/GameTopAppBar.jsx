import StatusBar from "../../features/character/components/StatusBar.jsx";
import PrimaryButton from "../../components/buttons/PrimaryButton.jsx";
import useSelectedCharacter from "../../hooks/useSelectedCharacter.jsx";
import { Link } from "react-router-dom";
import { paths } from "../../routes/paths.js";
import AvatarWithLevel from "../../components/avatar/AvatarWithLevel.jsx";

const GameTopAppBar = () => {
    const { character, removeSelectedCharacter } = useSelectedCharacter();

    return (
        <div className="relative w-full flex items-center justify-between p-3 bg-black bg-opacity-40 z-[50]">
            <div className="flex justify-between items-center">
                <Link to={paths.character.dashboard}>
                    <AvatarWithLevel size={60} avatar="../default_avatar.png" level={100} />
                </Link>

                <div className="w-[200px] ml-5">
                    <StatusBar value={65} maxValue={120} variant="hp" />
                    <StatusBar value={90} maxValue={250} variant="mana" />
                    <StatusBar value={25} variant="level" />
                    <StatusBar value={80} maxValue={100} variant="stamina" />
                </div>
            </div>

            <div className="flex justify-center">
                <p className="text-secondary">Złoto: 500</p>
            </div>

            <div className="flex items-center justify-end ml-2">
                <PrimaryButton
                    onClick={() => {
                        removeSelectedCharacter();
                    }}
                >
                    Wyloguj
                </PrimaryButton>
            </div>
        </div>
    );
};

export default GameTopAppBar;
