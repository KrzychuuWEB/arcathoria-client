import PropTypes from "prop-types";

const LandingButton = ({children, href}) => {
    return (
        <a
            className="bg-primary hover:bg-primary-600 text-white font-bold py-4 px-6 rounded-lg transition duration-300 ease-in-out"
            href={href}
        >
            {children}
        </a>
    );
};

LandingButton.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default LandingButton;