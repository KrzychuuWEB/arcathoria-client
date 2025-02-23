import AppRoutes from "./routes/AppRoutes.jsx";
import GlobalUI from "./components/GlobalUI.jsx";
import {useLoading} from "./contexts/LoadingContext.jsx";
import {initializeInterceptors} from "./api/interceptorManager.js";

const App = () => {
    const {setLoading} = useLoading();

    initializeInterceptors(setLoading);

    return (
        <div>
            <GlobalUI/>
            <AppRoutes/>
        </div>
    );
}

export default App
