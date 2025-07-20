import PropTypes from "prop-types";

const StatusBar = ({ value, maxValue, variant, xpNeeded, experience }) => {
    let adjustedValue = Math.min(value, maxValue);
    let percentage = 100;

    if (variant === "level" && experience && xpNeeded !== undefined) {
        percentage = percentage - ((xpNeeded - experience) / xpNeeded) * 100;
    } else if (maxValue) {
        percentage = (adjustedValue / maxValue) * 100;
    }

    const variants = {
        stamina: { className: "bg-primary", label: "Stamina" },
        hp: { className: "bg-complementary-green ", label: "HP" },
        mana: { className: "bg-complementary-blue", label: "Mana" },
        level: { className: "bg-complementary-red-600", label: "Level" },
    };

    const { className, label } = variants[variant] || {
        className: "bg-gray-500",
        label: "Unknown",
    };

    return (
        <div className="relative w-full h-[10px] bg-black rounded-sm flex items-center px-2 text-white text-[10px] font-bold">
            <span className="z-10">{label}</span>
            <div
                className={`absolute left-0 top-0 h-full ${className}`}
                style={{ width: `${percentage}%` }}
            ></div>
            <span className="ml-auto z-10">
                {variant === "level" && xpNeeded !== undefined
                    ? `${value} lvl / ${experience} XP (${xpNeeded} XP left)`
                    : `${value}`}
            </span>
        </div>
    );
};

StatusBar.propTypes = {
    value: PropTypes.number.isRequired,
    maxValue: PropTypes.number,
    variant: PropTypes.oneOf(["stamina", "hp", "mana", "level"]).isRequired,
    xpNeeded: PropTypes.number,
    experience: PropTypes.number,
};

export default StatusBar;
