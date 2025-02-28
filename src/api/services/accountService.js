import accountRepository from "../repositories/accountRepository.js";

const accountService = {
    register: (data) => {
        return accountRepository.register(data)
            .then(() => {
                return {
                    success: true,
                }
            })
            .catch(error => {
                return {
                    success: false,
                    code: error.response.data.errorCode,
                }
            })
    },
    login: (data, saveToken) => {
        return accountRepository.login(data)
            .then(response => {
                saveToken(response.data.token);
                return {success: true};
            })
            .catch(error => {
                return {
                    success: false,
                    code: error.response.data.errorCode,
                }
            })
    },
};

export default accountService;