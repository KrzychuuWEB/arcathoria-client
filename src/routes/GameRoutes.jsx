import {Route} from "react-router-dom";
import {paths} from "./paths.js";
import ProtectedRoute from "./ProtectedRoute.jsx";
import CharacterSelectPage from "../features/character/pages/CharacterSelectPage.jsx";
import CharacterPage from "../features/character/pages/CharacterPage.jsx";

const GameRoutes = () => {
    return (
        <>
            <Route element={<ProtectedRoute requiresAuth={false}/>}>
                <Route path={paths.game.selectCharacter} element={<CharacterSelectPage/>}/>
                <Route path={paths.game.dashboard} element={<CharacterPage/>}/>
            </Route>
        </>
    );
};

export default GameRoutes;