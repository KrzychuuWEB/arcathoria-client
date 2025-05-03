import StatusBar from "../../features/character/components/StatusBar.jsx";
import AvatarWithLevel from "../avatar/AvatarWithLevel.jsx";
import PropTypes from "prop-types";

const CharacterCard = ({ resource }) => {
    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex flex-col items-center bg-black bg-opacity-30 p-6 rounded-2xl shadow-lg w-[300px]">
                <div className="relative">
                    <AvatarWithLevel size={150} avatar={resource.avatar} level={resource.level} />
                </div>
                <p className="text-text-highlight text-xl font-heading text-center mt-2 mb-2 shadow-sm drop-shadow-md">
                    {resource.name}
                </p>
                <StatusBar value={resource.hp} maxValue={resource.maxHp} variant="hp" />
            </div>
        </div>
    );
};

CharacterCard.propTypes = {
    resource: PropTypes.object.isRequired,
};

export default CharacterCard;
