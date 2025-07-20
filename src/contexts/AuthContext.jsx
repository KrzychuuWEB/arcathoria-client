import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../routes/paths.js";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const saveToken = (jwtToken) => {
        localStorage.setItem("accessToken", jwtToken);
        setToken(jwtToken);
    };

    const removeToken = () => {
        localStorage.removeItem("accessToken");
        setToken(null);
        navigate(paths.home);
    };

    const isAuthenticated = () => {
        if (!token) return false;

        try {
            const decoded = jwtDecode(token);
            return decoded.exp * 1000 > Date.now();
        } catch (error) {
            removeToken();
        }
    };

    useEffect(() => {
        const savedToken = localStorage.getItem("accessToken");
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ token, saveToken, removeToken, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthContext;
