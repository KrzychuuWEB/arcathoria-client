import apiService from "../apiService.js";
import { endpoints } from "../endpoints.js";

const combatRepository = {
    initPve: (data) => apiService.post(endpoints.combats.initPve.url, data),
    performAction: (data, combatId) =>
        apiService.post(endpoints.combats.performAction.url(combatId), data),
};

export default combatRepository;
