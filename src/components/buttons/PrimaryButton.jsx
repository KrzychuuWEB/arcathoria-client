import PropTypes from "prop-types";

const PrimaryButton = ({children, href, ...props}) => {
    if (href) {
        return (
            <a href={href}
               className="bg-primary hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out" {...props}>
                {children}
            </a>
        );
    }

    return (
        <button
            className="bg-primary hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out" {...props}>
                {children}
        </button>
    );
};

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
}

export default PrimaryButton;