import StatusBar from "../../features/character/components/StatusBar.jsx";
import AvatarWithLevel from "../avatar/AvatarWithLevel.jsx";
import PropTypes from "prop-types";
import "./hitAnimation.css";

const CharacterCard = ({ resource, isHit, onHitEnd }) => {
    return (
        <div className="relative flex flex-col items-center bg-black bg-opacity-30 p-6 rounded-2xl shadow-lg w-[300px]">
            <div className="relative">
                <div
                    className={isHit ? "animate-hit" : ""}
                    onAnimationEnd={() => {
                        if (isHit && onHitEnd) onHitEnd();
                    }}
                >
                    <AvatarWithLevel size={150} avatar={resource.avatar} level={resource.level} />
                </div>
            </div>
            <p className="text-text-highlight text-xl font-heading text-center mt-2 mb-2 shadow-sm drop-shadow-md">
                {resource.name}
            </p>
            <StatusBar value={resource.hp} maxValue={resource.maxHp} variant="hp" />
        </div>
    );
};

CharacterCard.propTypes = {
    resource: PropTypes.object.isRequired,
    isHit: PropTypes.bool,
    onHitEnd: PropTypes.func,
};

export default CharacterCard;
