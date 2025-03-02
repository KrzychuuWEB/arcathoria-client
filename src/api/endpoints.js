export const apiMethod = {
    get: "get",
    post: "post",
    put: "put",
    delete: "delete",
};

export const endpoints = {
    accounts: {
        register: {
            method: apiMethod.post,
            url: "/accounts/register",
        },
        login: {
            method: apiMethod.post,
            url: "/authenticate",
        },
    },
};

const publicEndpoints = [endpoints.accounts.register, endpoints.accounts.login];

export const isPublicEndpoint = (url, method) => {
    return publicEndpoints.some((endpoint) => endpoint.url === url && endpoint.method === method);
};
