import { apiClient } from "./client.js";
import { isPublicEndpoint } from "./endpoints.js";
import { toast } from "react-toastify";
import { paths } from "../routes/paths.js";

let interceptorsInitialized = false;

export const initializeInterceptors = (setIsLoading, removeToken, navigate) => {
    if (interceptorsInitialized) return;
    interceptorsInitialized = true;

    apiClient.interceptors.request.use(
        (config) => {
            if (!isPublicEndpoint(config.url, config.method)) {
                const token = localStorage.getItem("accessToken");
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
            }

            setIsLoading(true);
            return config;
        },
        (error) => {
            setIsLoading(false);
            return Promise.reject(error);
        },
    );

    apiClient.interceptors.response.use(
        (response) => {
            setIsLoading(false);
            return response;
        },
        (error) => {
            setIsLoading(false);

            if (error.response) {
                switch (error.response.data.errorCode) {
                    case "ERR-AUTH-EXPIRED_TOKEN-401":
                        toast.warning("Twoja sesja wygasła. Zaloguj się ponownie!");
                        removeToken();
                        break;
                    case "ERR_ACCESS_DENIED-403":
                        toast.warning(error.response.data.message);
                        break;
                    case "ERR-AUTH-FORBIDDEN-403":
                        toast.warning("Brak odpowiednich uprawnień do przeglądania zasobów!");
                        navigate(paths.home);
                        break;
                    case "ERR-SERVER-500":
                        toast.error(
                            "Wystąpił błąd po stronie serwera. Spróbuj ponownie za kilka minut.",
                        );
                        break;
                }
            } else if (error.request) {
                if (error.message === "Network Error" || !navigator.onLine) {
                    toast.error("Brak połączenia z internetem. Sprawdź swoje połączenie.");
                } else if (error.message === "ECONNABORTED") {
                    toast.error("Przekroczono czas oczekiwania na odpowiedź.");
                } else {
                    toast.error("Wystąpił nieoczekiwany błąd.");
                }
            }

            return Promise.reject(error);
        },
    );
};
