import accountRoutesConfig from "./accountRoutesConfig.js";
import selectCharacterRoutesConfig from "./selectCharacterRoutesConfig.js";
import gameRoutesConfig from "./gameRoutesConfig.js";

const routesConfig = {
    ...accountRoutesConfig,
    ...selectCharacterRoutesConfig,
    ...gameRoutesConfig,
};

export default routesConfig;
