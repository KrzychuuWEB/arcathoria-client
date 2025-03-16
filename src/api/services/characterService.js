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
};

export default characterService;
