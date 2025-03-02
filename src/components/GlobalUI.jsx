import { Bounce, ToastContainer } from "react-toastify";
import ProgressBar from "./progressBar/ProgressBar.jsx";
import { useLoading } from "../contexts/LoadingContext.jsx";

const GlobalUI = () => {
    const { isLoading } = useLoading();

    return (
        <>
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
            <ProgressBar isAnimating={isLoading} />
        </>
    );
};

export default GlobalUI;
