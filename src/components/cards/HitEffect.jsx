import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const HitEffect = ({ type, value, delay = 0 }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), delay);
        const hideTimeout = setTimeout(() => setVisible(false), delay + 1000);
        return () => {
            clearTimeout(timeout);
            clearTimeout(hideTimeout);
        };
    }, [delay]);

    if (!visible) return null;

    const baseClass =
        "absolute text-white font-bold text-xl px-2 py-1 rounded shadow-lg animate-hitFloat z-50";

    const colorMap = {
        damage: "bg-red-600",
        heal: "bg-green-600",
        crit: "bg-yellow-400 text-black",
    };

    return <div className={`${baseClass} ${colorMap[type]}`}>{value}</div>;
};

HitEffect.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    delay: PropTypes.number,
};

export default HitEffect;
