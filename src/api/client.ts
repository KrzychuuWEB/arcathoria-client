import axios from "axios";

export const apiClient = axios.create({
    baseURL: import.meta.env.API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept-Language": "pl-PL",
    },
});
