import accountRepository from "../repositories/accountRepository.js";
import { extractError, toApiResult } from "../defaultResult.js";

const accountService = {
    register: (data) => toApiResult(accountRepository.register(data)),

    login: (data, saveToken) => {
        return accountRepository
            .login(data)
            .then((response) => {
                saveToken(response.data.token);
                return { success: true };
            })
            .catch((error) => {
                return extractError(error);
            });
    },
};

export default accountService;
