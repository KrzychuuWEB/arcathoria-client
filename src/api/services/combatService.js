import combatRepository from "../repositories/combatRepository.js";

const accountService = {
    initPveCombat: (data) => {
        return combatRepository
            .initPve(data)
            .then((response) => {
                return { success: true, data: response.data };
            })
            .catch((error) => {
                return {
                    success: false,
                    code: error.response.data.errorCode,
                    formErrors: error.response.data.details,
                };
            });
    },
};

export default accountService;
