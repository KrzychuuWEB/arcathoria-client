import apiService from "../apiService.js";
import { endpoints } from "../endpoints.js";

const characterRepository = {
    create: (data) => apiService.post(endpoints.characters.create.url, data),
    getAllMyCharacters: () => apiService.get(endpoints.characters.getAllMyCharacters.url),
    selectCharacter: (data) => apiService.post(endpoints.characters.setMyCharacter.url, data),
    getSelectedCharacter: () => apiService.get(endpoints.characters.getMyCharacter.url),
};

export default characterRepository;
