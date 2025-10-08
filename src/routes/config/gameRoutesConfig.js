import { paths } from "../paths.js";

const gameRoutesConfig = {
    [paths.character.dashboard]: {
        path: paths.character.dashboard,
        allowUnauthenticated: false,
        allowAuthenticatedNoCharacter: false,
        allowAuthenticatedWithCharacter: true,
    },
    [paths.expedition.choose]: {
        path: paths.expedition.choose,
        allowUnauthenticated: false,
        allowAuthenticatedNoCharacter: false,
        allowAuthenticatedWithCharacter: true,
    },
    [paths.combat.areaPattern]: {
        path: paths.combat.areaPattern,
        allowUnauthenticated: false,
        allowAuthenticatedNoCharacter: false,
        allowAuthenticatedWithCharacter: true,
    },
};

export default gameRoutesConfig;
