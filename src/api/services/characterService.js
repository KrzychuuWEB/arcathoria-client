import characterRepository from "../repositories/characterRepository.js";
import { toApiResult } from "../defaultResult.js";

const characterService = {
    create: (data) => toApiResult(characterRepository.create(data)),

    getAllMyCharacters: () => {
        return characterRepository.getAllMyCharacters().then((response) => {
            if (response.data.length > 0) {
                return response.data;
            } else {
                return null;
            }
        });
    },

    selectCharacter: (id) => toApiResult(characterRepository.selectCharacter(id)),

    getSelectedCharacter: () => toApiResult(characterRepository.getSelectedCharacter()),

    removeSelectedCharacter: () => toApiResult(characterRepository.removeSelectedCharacter()),
};

export default characterService;
