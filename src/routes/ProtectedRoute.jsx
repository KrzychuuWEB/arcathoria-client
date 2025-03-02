import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import useAuth from "../hooks/useAuth.jsx";
import { paths } from "./paths.js";

const ProtectedRoute = ({ requiresAuth }) => {
    const { isAuthenticated } = useAuth();

    if (requiresAuth && !isAuthenticated()) {
        return <Navigate to={paths.auth.login} />;
    }

    if (!requiresAuth && isAuthenticated()) {
        return <Navigate to={paths.character.dashboard} />;
    }

    return <Outlet />;
};

ProtectedRoute.propTypes = {
    requiresAuth: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
