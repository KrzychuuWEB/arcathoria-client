import {Route} from "react-router-dom";
import {paths} from "./paths.js";
import DashboardPage from "../features/dashboard/pages/DashboardPage.jsx";

const GameRoutes = () => {
    return (
        <>
            <Route path={paths.game.dashboard} element={<DashboardPage/>}/>
        </>
    );
};

export default GameRoutes;