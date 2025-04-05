import { paths } from "../paths.js";

const selectCharacterRoutesConfig = {
    [paths.character.select]: {
        path: paths.character.select,
        allowUnauthenticated: false,
        allowAuthenticatedNoCharacter: true,
        allowAuthenticatedWithCharacter: false,
    },
    [paths.character.create]: {
        path: paths.character.create,
        allowUnauthenticated: false,
        allowAuthenticatedNoCharacter: true,
        allowAuthenticatedWithCharacter: false,
    },
};

export default selectCharacterRoutesConfig;
