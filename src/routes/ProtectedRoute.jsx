import { matchPath, Navigate, Outlet, useLocation } from "react-router-dom";
import routesConfig from "./config/routesConfig.js";
import useAuth from "../hooks/useAuth.jsx";
import useSelectedCharacter from "../hooks/useSelectedCharacter.jsx";
import { paths } from "./paths.js";

const ProtectedRoute = () => {
    const location = useLocation();
    const { isAuthenticated } = useAuth();
    const { hasSelectedCharacter, isLoaded } = useSelectedCharacter();

    const currentRouteConfig = Object.values(routesConfig).find((config) =>
        matchPath({ path: config.path, end: true }, location.pathname),
    );

    if (!currentRouteConfig) {
        return <Navigate to="/404" />;
    }

    if (!isLoaded) {
        return null;
    }

    const { allowUnauthenticated, allowAuthenticatedNoCharacter, allowAuthenticatedWithCharacter } =
        currentRouteConfig;

    if (!isAuthenticated()) {
        return allowUnauthenticated ? <Outlet /> : <Navigate to={paths.account.login} />;
    }

    if (isAuthenticated() && !hasSelectedCharacter()) {
        return allowAuthenticatedNoCharacter ? (
            <Outlet />
        ) : (
            <Navigate to={paths.character.select} />
        );
    }

    if (isAuthenticated() && hasSelectedCharacter()) {
        return allowAuthenticatedWithCharacter ? (
            <Outlet />
        ) : (
            <Navigate to={paths.character.dashboard} />
        );
    }

    return <Outlet />;
};

export default ProtectedRoute;
