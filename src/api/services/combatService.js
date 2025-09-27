import combatRepository from "../repositories/combatRepository.js";
import { toApiResult } from "../defaultResult.js";

const accountService = {
    initPveCombat: (data) => {
        return toApiResult(combatRepository.initPve(data));
    },
    performAction: (data, combatId) => {
        return toApiResult(combatRepository.performAction(data, combatId));
    },
    getActiveCombatForSelectedCharacter: () => {
        return toApiResult(combatRepository.getActiveCombatForSelectedCharacter());
    },
    getCombatById: (combatId) => {
        return toApiResult(combatRepository.getCombatById(combatId));
    },
};

export default accountService;
