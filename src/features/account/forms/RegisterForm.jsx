import {paths} from "../../../routes/paths.js";
import {useFormik} from "formik";
import {registerValidationSchema} from "../validations/registerValidation.js";
import AuthFlexButtons from "../components/AuthFlexButtons.jsx";
import AuthHelperLink from "../components/AuthHelperLink.jsx";
import TextFieldWithLabel from "../../../components/fields/TextFieldWithLabel.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import useNotification from "../../../hooks/useNotification.jsx";
import {useNavigate} from "react-router-dom";
import accountService from "../../../api/services/accountService.js";

const RegisterForm = () => {
    const navigate = useNavigate();
    const {successNotification} = useNotification();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            repeatPassword: "",
        },
        validationSchema: registerValidationSchema,
        onSubmit: (values, {setFieldError, setSubmitting}) => {
            accountService.register({
                email: values.email,
                password: values.password,
            })
                .then(response => {
                    if (response.success) {
                        successNotification("Rejestracja udana!");
                        navigate(paths.auth.login);
                    } else {
                        if (response.code === "ERR_ACCOUNT_EMAIL_EXISTS-409") {
                            setFieldError("email", "Ten email jest już zajęty!");
                        }
                    }
                })
                .finally(() => {
                    setSubmitting(false);
                });
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} autoComplete="off">
            <TextFieldWithLabel formik={formik} label="Email" name="email"/>
            <div className="gap-4 flex justify-between items-start">
                <div className="w-[49%]">
                    <TextFieldWithLabel formik={formik} label="Hasło" type="password" name="password"/>
                </div>
                <div className="w-[49%]">
                    <TextFieldWithLabel formik={formik} label="Powtórz hasło" type="password" name="repeatPassword"/>
                </div>
            </div>

            <AuthFlexButtons>
                <AuthHelperLink href={paths.auth.login} title="Mam już konto"/>

                <PrimaryButton
                    type="submit"
                    disabled={formik.isSubmitting}
                >
                    Zarejestruj się
                </PrimaryButton>
            </AuthFlexButtons>
        </form>
    );
};

export default RegisterForm;