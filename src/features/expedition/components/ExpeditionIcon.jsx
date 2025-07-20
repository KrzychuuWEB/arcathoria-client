import PropTypes from "prop-types";
import "./css/icon.css";

const ExpeditionIcon = ({ url, alt, positionX, positionY, biomeName, action }) => {
    return (
        <div
            className="expedition-icon-wrapper"
            style={{
                top: positionY,
                left: positionX,
            }}
        >
            <img
                src={url}
                alt={alt}
                title={biomeName}
                width={250}
                className="expedition-icon"
                onClick={action}
            />
            <div className="expedition-icon-name">{biomeName}</div>
        </div>
    );
};

ExpeditionIcon.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    positionX: PropTypes.number.isRequired,
    positionY: PropTypes.number.isRequired,
    biomeName: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
};

export default ExpeditionIcon;
