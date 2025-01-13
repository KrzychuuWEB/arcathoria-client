import {Route} from "react-router-dom";
import {paths} from "./paths.js";
import LoginPage from "../features/auth/pages/LoginPage.jsx";
import RegisterPage from "../features/auth/pages/RegisterPage.jsx";
import RecoveryPasswordPage from "../features/auth/pages/RecoveryPasswordPage.jsx";
import ResetPasswordPage from "../features/auth/pages/ResetPasswordPage.jsx";

const AuthRoutes = () => {
    return (
        <>
            <Route path={paths.auth.login} element={<LoginPage/>}/>
            <Route path={paths.auth.register} element={<RegisterPage/>}/>
            <Route path={paths.auth.recoveryPassword} element={<RecoveryPasswordPage/>}/>
            <Route path={paths.auth.resetPassword} element={<ResetPasswordPage/>}/>
        </>
    );
};

export default AuthRoutes;