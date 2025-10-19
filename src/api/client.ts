import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import NProgress from "nprogress";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": "pl-PL",
    },
});

export const api = <T>(config: AxiosRequestConfig): Promise<T> => {
    return instance.request<T>(config).then((res) => res.data);
};

instance.interceptors.request.use((config) => {
    NProgress.start();
    return config;
});

instance.interceptors.response.use(
    (response) => {
        NProgress.done();
        return response;
    },
    (error) => {
        NProgress.done();
        return Promise.reject(error);
    },
);
