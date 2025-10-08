import PropTypes from "prop-types";

const ActionButton = ({ onClick, isActive, title, children, color }) => {
    return (
        <button
            onClick={onClick}
            disabled={!isActive}
            className={`bg-${color} text-white p-3 rounded-full shadow-md transition hover:scale-105 ${
                !isActive ? "opacity-40 cursor-not-allowed" : ""
            }`}
            title={title}
        >
            {children}
        </button>
    );
};

ActionButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default ActionButton;
