import {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {paths} from "../routes/paths.js";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const saveToken = (jwtToken) => {
        localStorage.setItem('authToken', jwtToken);
        setToken(jwtToken);
    };

    const removeToken = () => {
        localStorage.removeItem('authToken');
        setToken(null);
        navigate(paths.home);
    };

    useEffect(() => {
        const savedToken = localStorage.getItem('authToken');
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);


    return (
        <AuthContext.Provider value={{token, saveToken, removeToken}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;