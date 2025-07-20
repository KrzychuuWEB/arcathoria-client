import characterRepository from "../repositories/characterRepository.js";

const characterService = {
    create: (data) => {
        return characterRepository
            .create(data)
            .then(() => {
                return {
                    success: true,
                };
            })
            .catch((error) => {
                return {
                    success: false,
                    code: error.response.data.errorCode,
                    message: error.response.data.message,
                    formErrors: error.response.data.details,
                };
            });
    },
    getAllMyCharacters: () => {
        return characterRepository.getAllMyCharacters().then((response) => {
            if (response.data.length > 0) {
                return response.data;
            } else {
                return null;
            }
        });
    },
    selectCharacter: (id) => {
        return characterRepository
            .selectCharacter(id)
            .then((response) => {
                return {
                    success: true,
                    data: response.data,
                };
            })
            .catch((error) => {
                return {
                    success: false,
                    errorCode: error.response.data.errorCode,
                    message: error.response.data.message,
                };
            });
    },
    getSelectedCharacter: () => {
        return characterRepository
            .getSelectedCharacter()
            .then((response) => {
                return {
                    success: true,
                    data: response.data,
                };
            })
            .catch((error) => {
                return {
                    success: false,
                    errorCode: error.response.data.errorCode,
                    message: error.response.data.message,
                };
            });
    },
    removeSelectedCharacter: () => {
        return characterRepository
            .removeSelectedCharacter()
            .then(() => {
                return {
                    success: true,
                };
            })
            .catch((error) => {
                return {
                    success: false,
                    errorCode: error.response.data.errorCode,
                    message: error.response.data.message,
                };
            });
    },
};

export default characterService;
