import accountRepository from "../repositories/accountRepository.js";

const accountService = {
    register: (data) => {
        return accountRepository.register(data)
            .then(response => {
                return {
                    id: response.data.id,
                    email: response.data.email,
                }
            })
    },
};

export default accountService;