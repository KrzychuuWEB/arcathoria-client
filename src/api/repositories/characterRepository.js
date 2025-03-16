import apiService from "../apiService.js";
import { endpoints } from "../endpoints.js";

const characterRepository = {
    create: (data) => apiService.post(endpoints.characters.create.url, data),
};

export default characterRepository;
