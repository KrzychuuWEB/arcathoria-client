import PropTypes from "prop-types";
import "../cards/hitAnimation.css";

const AvatarWithLevel = ({ avatar, level, size }) => {
    return (
        <div
            style={{
                position: "relative",
                width: size,
                height: size,
            }}
        >
            <img
                src={avatar}
                alt="avatar"
                className="w-full h-full object-cover rounded-full border border-black"
            />
            {size < 100 ? (
                <div className="absolute -top-2 left-2 bg-secondary text-black text-[9px] font-bold px-2 py-0.5 rounded-full shadow-md">
                    Lv. {level}
                </div>
            ) : (
                <div className="absolute top-0 right-4 bg-secondary text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
                    Lv. {level}
                </div>
            )}
        </div>
    );
};

AvatarWithLevel.propTypes = {
    avatar: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
};

export default AvatarWithLevel;
