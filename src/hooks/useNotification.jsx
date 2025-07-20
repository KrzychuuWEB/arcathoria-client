import { toast } from "react-toastify";

const useNotification = () => {
    const successNotification = (message) => {
        toast.success(message);
    };

    const errorNotification = (message) => {
        toast.error(message);
    };

    const infoNotification = (message) => {
        toast.info(message);
    };

    const warningNotification = (message) => {
        toast.warning(message);
    };

    return {
        successNotification,
        errorNotification,
        infoNotification,
        warningNotification,
    };
};

export default useNotification;
