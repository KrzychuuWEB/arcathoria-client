import { paths } from "../paths.js";

const accountRoutesConfig = {
    [paths.home]: {
        path: paths.home,
        allowUnauthenticated: true,
        allowAuthenticatedNoCharacter: false,
        allowAuthenticatedWithCharacter: false,
    },
    [paths.account.login]: {
        path: paths.account.login,
        allowUnauthenticated: true,
        allowAuthenticatedNoCharacter: false,
        allowAuthenticatedWithCharacter: false,
    },
    [paths.account.register]: {
        path: paths.account.register,
        allowUnauthenticated: true,
        allowAuthenticatedNoCharacter: false,
        allowAuthenticatedWithCharacter: false,
    },
    [paths.account.recoveryPassword]: {
        path: paths.account.recoveryPassword,
        allowUnauthenticated: true,
        allowAuthenticatedNoCharacter: false,
        allowAuthenticatedWithCharacter: false,
    },
    [paths.account.resetPassword]: {
        path: paths.account.resetPassword,
        allowUnauthenticated: true,
        allowAuthenticatedNoCharacter: false,
        allowAuthenticatedWithCharacter: false,
    },
};

export default accountRoutesConfig;
