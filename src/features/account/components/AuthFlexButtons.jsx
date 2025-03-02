import PropTypes from "prop-types";

const AuthFlexButtons = ({ children }) => {
    return <div className="flex justify-between items-center pr-5 pl-5 mt-5">{children}</div>;
};

AuthFlexButtons.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthFlexButtons;
