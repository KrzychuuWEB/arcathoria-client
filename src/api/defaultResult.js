export function extractError(error) {
    const response = error?.response;
    const data = response?.data;

    return {
        success: false,
        code: data?.errorCode ?? "ERR_UNKNOWN",
        message: data?.message ?? null,
        formErrors: data?.details ?? null,
    };
}

export function successResult(response) {
    return {
        success: true,
        data: response?.data ?? response,
    };
}

export function toApiResult(promise) {
    return promise.then(successResult).catch(extractError);
}
