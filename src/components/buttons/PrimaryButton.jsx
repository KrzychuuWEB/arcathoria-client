import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PrimaryButton = ({ children, href, ...props }) => {
    if (href) {
        return (
            <Link
                to={href}
                className="bg-primary hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                {...props}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className="bg-primary hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out disabled:bg-gray-400"
            {...props}
        >
            {children}
        </button>
    );
};

PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string,
};

export default PrimaryButton;
