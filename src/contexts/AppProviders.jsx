import { LoadingProvider } from "./LoadingContext";
import PropTypes from "prop-types";
import { AuthProvider } from "./AuthContext.jsx";
import { SelectedCharacterProvider } from "./SelectedCharacterContext.jsx";
import { ActiveCombatProvider } from "./ActiveCombatContext.jsx";

const AppProviders = ({ children }) => {
    return (
        <LoadingProvider>
            <AuthProvider>
                <SelectedCharacterProvider>
                    <ActiveCombatProvider>{children}</ActiveCombatProvider>
                </SelectedCharacterProvider>
            </AuthProvider>
        </LoadingProvider>
    );
};

AppProviders.propTypes = {
    children: PropTypes.node,
};

export default AppProviders;
