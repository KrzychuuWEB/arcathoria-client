export const paths = {
    home: "/",
    account: {
        login: "/account/login",
        register: "/account/register",
        recoveryPassword: "/account/recovery-password",
        resetPassword: "/account/reset-password",
    },
    character: {
        dashboard: "/game",
        select: "/game/character/select",
        create: "/game/character/create",
    },
    expedition: {
        choose: "/game/expedition",
    },
    combat: {
        areaPattern: "/game/combat/:combatId",
        area: (combatId) => `/game/combat/${combatId}`,
    },
};
