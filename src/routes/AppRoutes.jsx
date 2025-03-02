import {Route, Routes} from "react-router-dom";
import {paths} from "./paths.js";
import HomePage from "../pages/HomePage.jsx";
import AuthRoutes from "./AuthRoutes.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import GameRoutes from "./GameRoutes.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<ProtectedRoute requiresAuth={false}/>}>
                <Route index path={paths.home} element={<HomePage/>}/>
            </Route>
            {AuthRoutes()}
            {GameRoutes()}
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default AppRoutes;