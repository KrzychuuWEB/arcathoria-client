import {Route} from "react-router-dom";
import {paths} from "./paths.js";
import ProtectedRoute from "./ProtectedRoute.jsx";
import CharacterSelectPage from "../features/character/pages/CharacterSelectPage.jsx";

const GameRoutes = () => {
    return (
        <>
            <Route element={<ProtectedRoute requiresAuth={false}/>}>
                <Route path={paths.game.dashboard} element={<CharacterSelectPage/>}/>
            </Route>
        </>
    );
};

export default GameRoutes;