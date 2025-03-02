import StatusBar from "../../components/game/character/StatusBar.jsx";
import PrimaryButton from "../../components/buttons/PrimaryButton.jsx";
import useAuth from "../../hooks/useAuth.jsx";

const GameTopAppBar = () => {
    const {removeToken} = useAuth();

    return (
        <div className="relative w-full flex items-center justify-between p-3 bg-black bg-opacity-40 z-[50]">
            <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center items-center">
                    <p className="text-white text-[10px]">character name</p>
                    <div className="w-[50px] h-[50px] rounded-full bg-complementary-green-600"></div>
                </div>

                <div className="w-[200px] ml-5">
                    <StatusBar value={65} maxValue={120} variant="hp"/>
                    <StatusBar value={90} maxValue={250} variant="mana"/>
                    <StatusBar value={25} variant="level"/>
                    <StatusBar value={80} maxValue={100} variant="stamina"/>
                </div>
            </div>

            <div className="flex justify-center">
                <p className="text-secondary">Złoto: 500</p>
            </div>

            <div className="flex items-center justify-end ml-2">
                <PrimaryButton
                    onClick={() => {
                        removeToken()
                    }}
                >
                    Wyloguj
                </PrimaryButton>
            </div>
        </div>
    );
}

export default GameTopAppBar;