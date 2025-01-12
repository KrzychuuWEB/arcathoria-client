import PropTypes from "prop-types";

const AuthHelperLink = ({href, title}) => {
    return (
        <a href={href} className="text-text-secondary underline">
            {title}
        </a>
    );
};

AuthHelperLink.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default AuthHelperLink;