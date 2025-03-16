import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": "pl-PL",
    },
    withCredentials: true,
    timeout: 10000,
});
