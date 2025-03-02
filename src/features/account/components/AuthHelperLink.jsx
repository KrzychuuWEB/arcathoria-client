import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthHelperLink = ({ href, title }) => {
    return (
        <Link
            to={href}
            className="text-text-secondary underline hover:text-text-light transition duration-300 ease-in-out"
        >
            {title}
        </Link>
    );
};

AuthHelperLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default AuthHelperLink;
