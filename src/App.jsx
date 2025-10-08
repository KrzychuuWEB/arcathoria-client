import AppRoutes from "./routes/AppRoutes.jsx";
import GlobalUI from "./components/GlobalUI.jsx";
import { useLoading } from "./contexts/LoadingContext.jsx";
import { initializeInterceptors } from "./api/interceptorManager.js";
import useAuth from "./hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import useSelectedCharacter from "./hooks/useSelectedCharacter.jsx";

const App = () => {
    const { setLoading } = useLoading();
    const { removeToken } = useAuth();
    const { clearSelectedCharacter } = useSelectedCharacter();
    const navigate = useNavigate();

    initializeInterceptors(setLoading, removeToken, navigate, clearSelectedCharacter);

    return (
        <div>
            <GlobalUI />
            <AppRoutes />
        </div>
    );
};

export default App;
