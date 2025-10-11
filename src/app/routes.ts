export const routes = {
    home: {
        base: "/",
    },
    account: {
        base: "/account",
        login: "/account/login",
        register: "/account/register",
    },
    character: {
        base: "/character",
        list: "/character/list",
        create: "/character/create",
    },
} as const;
