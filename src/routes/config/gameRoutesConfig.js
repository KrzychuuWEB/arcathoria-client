import { paths } from "../paths.js";

const gameRoutesConfig = {
    [paths.character.dashboard]: {
        path: paths.character.dashboard,
        allowUnauthenticated: false,
        allowAuthenticatedNoCharacter: false,
        allowAuthenticatedWithCharacter: true,
    },
};

export default gameRoutesConfig;
