import {apiClient} from "./client.js";
import {handleApiError} from "../utils/apiErrorsHandler.js";

let interceptorsInitialized = false;

export const initializeInterceptors = (setIsLoading) => {
    if (interceptorsInitialized) return;
    interceptorsInitialized = true;

    apiClient.interceptors.request.use(
        config => {
            setIsLoading(true);
            return config;
        },
        error => {
            setIsLoading(false);
            handleApiError(error);
            return Promise.reject(error);
        }
    );

    apiClient.interceptors.response.use(
        response => {
            setIsLoading(false);
            return response;
        },
        error => {
            setIsLoading(false);
            handleApiError(error);
            return Promise.reject(error);
        }
    );
};
