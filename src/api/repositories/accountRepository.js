import apiService from "../apiService.js";
import { endpoints } from "../endpoints.js";

const accountRepository = {
    register: (data) => apiService.post(endpoints.accounts.register.url, data),
    login: (data) => apiService.post(endpoints.accounts.login.url, data),
};

export default accountRepository;
