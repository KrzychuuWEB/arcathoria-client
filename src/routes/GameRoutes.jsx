import { Route } from "react-router-dom";
import { paths } from "./paths.js";
import ProtectedRoute from "./ProtectedRoute.jsx";
import CharacterSelectPage from "../features/character/pages/CharacterSelectPage.jsx";
import CharacterPage from "../features/character/pages/CharacterPage.jsx";
import CreateCharacterPage from "../features/character/pages/CreateCharacterPage.jsx";

const GameRoutes = () => {
    return (
        <>
            <Route path={paths.character.select} element={<ProtectedRoute />}>
                <Route index element={<CharacterSelectPage />} />
            </Route>
            <Route path={paths.character.create} element={<ProtectedRoute />}>
                <Route index element={<CreateCharacterPage />} />
            </Route>
            <Route path={paths.character.dashboard} element={<ProtectedRoute />}>
                <Route index element={<CharacterPage />} />
            </Route>
        </>
    );
};

export default GameRoutes;
