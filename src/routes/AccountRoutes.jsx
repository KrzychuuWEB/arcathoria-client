import { Route } from "react-router-dom";
import { paths } from "./paths.js";
import LoginPage from "../features/account/pages/LoginPage.jsx";
import RegisterPage from "../features/account/pages/RegisterPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import RecoveryPasswordPage from "../features/account/pages/RecoveryPasswordPage.jsx";
import ResetPasswordPage from "../features/account/pages/ResetPasswordPage.jsx";

const AccountRoutes = () => {
    return (
        <>
            <Route path={paths.account.login} element={<ProtectedRoute />}>
                <Route index element={<LoginPage />} />
            </Route>
            <Route path={paths.account.register} element={<ProtectedRoute />}>
                <Route index element={<RegisterPage />} />
            </Route>
            <Route path={paths.account.recoveryPassword} element={<ProtectedRoute />}>
                <Route index element={<RecoveryPasswordPage />} />
            </Route>
            <Route path={paths.account.resetPassword} element={<ProtectedRoute />}>
                <Route index element={<ResetPasswordPage />} />
            </Route>
        </>
    );
};

export default AccountRoutes;
