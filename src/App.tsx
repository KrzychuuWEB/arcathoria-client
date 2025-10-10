import { AppRouter } from "@app/router.tsx";
import ToastProvider from "@shared/libs/toastify/ToastProvider.tsx";

const App = () => {
    return (
        <>
            <AppRouter />
            <ToastProvider />
        </>
    );
};

export default App;
