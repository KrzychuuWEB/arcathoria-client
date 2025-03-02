import { useFormik } from "formik";
import { loginValidationSchema } from "../validations/loginValidation.js";
import AuthFlexButtons from "../components/AuthFlexButtons.jsx";
import { paths as routes, paths } from "../../../routes/paths.js";
import TextFieldWithLabel from "../../../components/fields/TextFieldWithLabel.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import AuthHelperLink from "../components/AuthHelperLink.jsx";
import useNotification from "../../../hooks/useNotification.jsx";
import accountService from "../../../api/services/accountService.js";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth.jsx";
import { mapApiDetailsToFieldError } from "../../../utils/mapApiDetailsToFieldError.js";

const LoginPageForm = () => {
    const { saveToken } = useAuth();
    const { successNotification } = useNotification();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values, { setFieldError, setSubmitting }) => {
            accountService
                .login(
                    {
                        email: values.email,
                        password: values.password,
                    },
                    saveToken,
                )
                .then((response) => {
                    if (response.success) {
                        successNotification("Logowanie udane!");
                        navigate(routes.character.dashboard);
                    } else {
                        if (response.code === "ERR-AUTH-BAD_CREDENTIALS-400") {
                            setFieldError("email", "Email lub hasło jest nieprawidłowe!");
                            setFieldError("password", "Email lub hasło jest nieprawidłowe!");
                        }
                        mapApiDetailsToFieldError(response, setFieldError);
                    }
                })
                .finally(() => setSubmitting(false));
        },
    });

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextFieldWithLabel formik={formik} label="Email" name="email" />

            <TextFieldWithLabel formik={formik} label="Hasło" name="password" type="password" />

            <AuthFlexButtons>
                <AuthHelperLink href={paths.auth.recoveryPassword} title="Zapomniałem hasła" />

                <PrimaryButton disabled={formik.isSubmitting} type="submit">
                    Zaloguj się
                </PrimaryButton>
            </AuthFlexButtons>
        </form>
    );
};

export default LoginPageForm;
