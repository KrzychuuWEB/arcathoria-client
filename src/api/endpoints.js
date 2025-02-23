export const apiMethod = {
    get: "get",
    post: "post",
    put: "put",
    delete: "delete"
};

export const endpoints = {
    accounts: {
        register: {
            method: apiMethod.post,
            url: "/accounts"
        },
    }
}

const publicEndpoints = [
    endpoints.accounts.register,
];

export const isPublicEndpoint = (requestConfig) => {
    return publicEndpoints.some(endpoint =>
        endpoint.url === requestConfig.url &&
        endpoint.method === requestConfig.method
    );
};