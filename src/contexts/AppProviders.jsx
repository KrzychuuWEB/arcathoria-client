import { LoadingProvider } from "./LoadingContext";
import PropTypes from "prop-types";
import { AuthProvider } from "./AuthContext.jsx";
import { SelectedCharacterProvider } from "./SelectedCharacterContext.jsx";

const AppProviders = ({ children }) => {
    return (
        <LoadingProvider>
            <SelectedCharacterProvider>
                <AuthProvider>{children}</AuthProvider>
            </SelectedCharacterProvider>
        </LoadingProvider>
    );
};

AppProviders.propTypes = {
    children: PropTypes.node,
};

export default AppProviders;
