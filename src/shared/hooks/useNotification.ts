import { toast } from "react-toastify";

const useNotification = () => {
    const infoNotify = (message: string) => {
        return toast.info(message);
    };

    const successNotify = (message: string) => {
        return toast.success(message);
    };

    const warningNotify = (message: string) => {
        return toast.warning(message);
    };

    const errorNotify = (message: string) => {
        return toast.error(message);
    };

    return { infoNotify, successNotify, warningNotify, errorNotify };
};

export default useNotification;
