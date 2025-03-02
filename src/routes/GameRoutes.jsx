import {Route} from "react-router-dom";
import {paths} from "./paths.js";
import DashboardPage from "../features/dashboard/pages/DashboardPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const GameRoutes = () => {
    return (
        <>
            <Route element={<ProtectedRoute requiresAuth={true}/>}>
                <Route path={paths.game.dashboard} element={<DashboardPage/>}/>
            </Route>
        </>
    );
};

export default GameRoutes;