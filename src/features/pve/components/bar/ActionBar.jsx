import PropTypes from "prop-types";

const ActionBar = ({ children }) => {
    return <div className="flex flex-col items-center space-y-2">{children}</div>;
};

ActionBar.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ActionBar;
