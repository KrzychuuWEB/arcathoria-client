import PropTypes from "prop-types";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import useSelectedCharacter from "../../../hooks/useSelectedCharacter.jsx";

const SelectCharacterItem = ({ character }) => {
    const { selectCharacterById } = useSelectedCharacter();

    return (
        <div className="w-[300px] m-5 p-3 bg-black bg-opacity-60 rounded-md">
            <div className="text-center text-2xl font-body text-white mb-5">
                {character.characterName}
            </div>

            {/*<div className="flex flex-col gap-1">*/}
            {/*    <StatusBar*/}
            {/*        value={character.level}*/}
            {/*        experience={character.experience}*/}
            {/*        xpNeeded={character.xpGain}*/}
            {/*        variant="level"*/}
            {/*    />*/}
            {/*    <StatusBar value={character.stamina} maxValue={100} variant="stamina" />*/}
            {/*</div>*/}

            {/*<p className="mt-5 text-secondary">Złoto: {character.gold}</p>*/}

            <div className="mt-10 flex justify-center items-center">
                <PrimaryButton onClick={() => selectCharacterById(character.id)}>
                    Wejdz do gry
                </PrimaryButton>
            </div>
        </div>
    );
};

SelectCharacterItem.propTypes = {
    character: PropTypes.object.isRequired,
};

export default SelectCharacterItem;
