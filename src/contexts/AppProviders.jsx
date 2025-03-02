import { LoadingProvider } from "./LoadingContext";
import PropTypes from "prop-types";
import { AuthProvider } from "./AuthContext.jsx";

const AppProviders = ({ children }) => {
    return (
        <LoadingProvider>
            <AuthProvider>{children}</AuthProvider>
        </LoadingProvider>
    );
};

AppProviders.propTypes = {
    children: PropTypes.node,
};

export default AppProviders;
