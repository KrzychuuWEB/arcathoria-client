import { Route } from "react-router-dom";
import { paths } from "./paths.js";
import ProtectedRoute from "./ProtectedRoute.jsx";
import CharacterSelectPage from "../features/character/pages/CharacterSelectPage.jsx";
import CharacterPage from "../features/character/pages/CharacterPage.jsx";
import CreateCharacterPage from "../features/character/pages/CreateCharacterPage.jsx";

const GameRoutes = () => {
    return (
        <>
            <Route element={<ProtectedRoute requiresAuth={true} />}>
                <Route path={paths.character.select} element={<CharacterSelectPage />} />
                <Route path={paths.character.create} element={<CreateCharacterPage />} />
                <Route path={paths.character.dashboard} element={<CharacterPage />} />
            </Route>
        </>
    );
};

export default GameRoutes;
