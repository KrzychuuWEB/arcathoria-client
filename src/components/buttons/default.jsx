import PropTypes from "prop-types";

const DefaultButton = ({children, ...props}) => {
    return (
        <button
            className="w-full bg-arcane-purple hover:bg-arcane-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            {...props}
        >
            {children}
        </button>
    );
};

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultButton;