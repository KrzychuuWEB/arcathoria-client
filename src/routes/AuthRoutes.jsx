import {Route} from "react-router-dom";
import {paths} from "./paths.js";
import LoginPage from "../features/account/pages/LoginPage.jsx";
import RegisterPage from "../features/account/pages/RegisterPage.jsx";
import RecoveryPasswordPage from "../features/account/pages/RecoveryPasswordPage.jsx";
import ResetPasswordPage from "../features/account/pages/ResetPasswordPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const AuthRoutes = () => {
    return (
        <>
            <Route element={<ProtectedRoute requiresAuth={false}/>}>
                <Route path={paths.auth.login} element={<LoginPage/>}/>
                <Route path={paths.auth.register} element={<RegisterPage/>}/>
                <Route path={paths.auth.resetPassword} element={<ResetPasswordPage/>}/>
                <Route path={paths.auth.recoveryPassword} element={<RecoveryPasswordPage/>}/>
            </Route>

            <Route element={<ProtectedRoute requiresAuth={true}/>}>
            </Route>
        </>
    );
};

export default AuthRoutes;