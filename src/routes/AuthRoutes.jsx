import {Route} from "react-router-dom";
import {paths} from "./paths.js";
import LoginPage from "../features/auth/pages/LoginPage.jsx";
import RegisterPage from "../features/auth/pages/RegisterPage.jsx";

const AuthRoutes = () => {
    return (
        <>
            <Route path={paths.auth.login} element={<LoginPage/>}/>
            <Route path={paths.auth.register} element={<RegisterPage/>}/>
        </>
    );
};

export default AuthRoutes;