import PropTypes from "prop-types";

const LandingButton = ({children, ...props}) => {
    return (
        <button
            className="bg-primary hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
            {...props}
        >
            {children}
        </button>
    );
};

LandingButton.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LandingButton;