import apiService from "../apiService.js";
import { endpoints } from "../endpoints.js";

const combatRepository = {
    initPve: (data) => apiService.post(endpoints.combats.initPve.url, data),
};

export default combatRepository;
