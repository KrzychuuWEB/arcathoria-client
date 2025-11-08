import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastProvider = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={4000}
            theme="dark"
            pauseOnHover
            draggable
            className="text-sm"
        />
    );
};
