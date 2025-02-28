import {useFormik} from "formik";
import {resetPasswordValidation} from "../validations/resetPasswordValidation.js";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import TextFieldWithLabel from "../../../components/fields/TextFieldWithLabel.jsx";
import PropTypes from "prop-types";

const ResetPasswordForm = ({setIsSuccess}) => {
    const formik = useFormik({
        initialValues: {
            password: "",
            repeatPassword: "",
        },
        validationSchema: resetPasswordValidation,
        onSubmit: values => {
            console.log(values);
            setIsSuccess(true);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} autoComplete="off">
            <TextFieldWithLabel formik={formik} name="password" type="password" label="Nowe hasło"/>
            <TextFieldWithLabel formik={formik} name="repeatPassword" type="password" label="Powtórz nowe hasło"/>

            <div className="flex justify-end items-center mt-5 pr-5">
                <PrimaryButton
                    type="submit"
                    disabled={formik.isSubmitting}
                >
                    Ustaw nowe hasło
                </PrimaryButton>
            </div>
        </form>
    );
};

ResetPasswordForm.propTypes = {
    setIsSuccess: PropTypes.func.isRequired,
}

export default ResetPasswordForm;