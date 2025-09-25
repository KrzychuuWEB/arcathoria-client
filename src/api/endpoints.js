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
    characters: {
        create: {
            method: apiMethod.post,
            url: "/characters",
        },
        getAllMyCharacters: {
            method: apiMethod.get,
            url: "/characters/selects",
        },
        setMyCharacter: {
            method: apiMethod.post,
            url: "/characters/selects",
        },
        getMyCharacter: {
            method: apiMethod.get,
            url: "/characters/selects/me",
        },
        removeMyCharacter: {
            method: apiMethod.delete,
            url: "/characters/selects",
        },
    },
    combats: {
        initPve: {
            method: apiMethod.post,
            url: "/combats/init/pve",
        },
        performAction: {
            method: apiMethod.post,
            url: (combatId) => `/combats/${combatId}/actions/execute`,
        },
    },
};

const publicEndpoints = [endpoints.accounts.register, endpoints.accounts.login];

export const isPublicEndpoint = (url, method) => {
    return publicEndpoints.some((endpoint) => endpoint.url === url && endpoint.method === method);
};
