export const mapApiDetailsToFieldError = (response, setFieldError) => {
    if (response.code === "ERR-DATA-VALIDATION-400" && response.formErrors) {
        response.formErrors.forEach(({ field, issue }) => {
            setFieldError(field, issue);
        });
    }
};
