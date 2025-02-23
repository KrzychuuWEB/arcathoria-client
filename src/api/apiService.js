import {apiClient} from "./client.js";

const apiService = {
    request: ({method, url, data = null, params = null, headers = {}}) => {
        return apiClient({
            method,
            url,
            data,
            params,
            headers,
        });
    },

    get: (url, params = null, headers = {}) => {
        return apiService.request({method: 'get', url, params, headers});
    },

    post: (url, data, headers = {}) => {
        return apiService.request({method: 'post', url, data, headers});
    },

    put: (url, data, headers = {}) => {
        return apiService.request({method: 'put', url, data, headers});
    },

    delete: (url, headers = {}) => {
        return apiService.request({method: 'delete', url, headers});
    }
};

export default apiService;
