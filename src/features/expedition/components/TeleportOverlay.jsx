import { useEffect } from "react";
import PropTypes from "prop-types";
import "./css/teleport.css";

const TeleportOverlay = ({ onAnimationEnd }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onAnimationEnd();
        }, 1000);

        return () => clearTimeout(timer);
    }, [onAnimationEnd]);
    return <div className="fixed inset-0 z-50 bg-black bg-opacity-80 animate-teleport-blur" />;
};

TeleportOverlay.propTypes = {
    onAnimationEnd: PropTypes.func.isRequired,
};

export default TeleportOverlay;
