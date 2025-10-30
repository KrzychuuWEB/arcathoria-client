import axios, { type AxiosError, type AxiosRequestConfig, type InternalAxiosRequestConfig, } from "axios";
import NProgress from "nprogress";
import type { ProblemDetail } from "@api/errors/problemDetail.ts";

const baseUrl = import.meta.env.API_URL ?? "http://localhost:8080/v1";

const instance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": "pl-PL",
    },
    withCredentials: true,
    withXSRFToken: true,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
});

declare module "axios" {
    interface AxiosRequestConfig {
        _retry?: boolean;
    }
}

export const api = <T>(config: AxiosRequestConfig): Promise<T> => {
    return instance.request<T>(config).then((res) => res.data);
};

let isFetchingCsrf = false;

const hasCsrfToken = () => {
    return document.cookie.split("; ").some((row) => row.startsWith("XSRF-TOKEN="));
};

instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        NProgress.start();

        const isMutatingRequest = ["post", "put", "delete", "patch"].includes(
            config.method?.toLowerCase() ?? "",
        );

        if (isMutatingRequest && !hasCsrfToken() && !isFetchingCsrf) {
            isFetchingCsrf = true;

            try {
                await axios.get(baseUrl + "/csrf", {
                    withCredentials: true,
                });
            } finally {
                isFetchingCsrf = false;
            }
        }

        return config;
    },
    (error) => Promise.reject(error),
);

instance.interceptors.response.use(
    (response) => {
        NProgress.done();
        return response;
    },
    async (error: AxiosError<ProblemDetail>) => {
        const originalRequest = error.config as
            | (InternalAxiosRequestConfig & AxiosRequestConfig)
            | undefined;

        if (error.response?.status === 403 && originalRequest && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                await axios.get(`${baseUrl}/csrf`, { withCredentials: true });
                return instance(originalRequest);
            } catch {
                NProgress.done();
                return Promise.reject(error);
            }
        }

        NProgress.done();

        if (error.response?.data) {
            return Promise.reject(error.response.data as ProblemDetail);
        }

        return Promise.reject(error);
    },
);
