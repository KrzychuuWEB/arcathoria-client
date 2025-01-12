import {useFormik} from "formik";
import {loginValidationSchema} from "../validations/loginValidation.js";
import AuthFlexButtons from "../components/AuthFlexButtons.jsx";
import {paths} from "../../../routes/paths.js";
import TextFieldWithLabel from "../../../components/fields/TextFieldWithLabel.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";

const LoginPageForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values, {setSubmitting}) => {
            console.log(values);
            setSubmitting(false);
        }
    })

    return (
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <TextFieldWithLabel
                formik={formik}
                label="Email"
                name="email"
            />

            <TextFieldWithLabel
                formik={formik}
                label="Hasło"
                name="password"
                type="password"
            />

            <AuthFlexButtons>
                <a href={paths.auth.login} className="text-text-secondary underline">
                    Zapomniałem hasła
                </a>

                <PrimaryButton
                    disabled={formik.isSubmitting}
                    type="submit"
                >
                    Zaloguj się
                </PrimaryButton>
            </AuthFlexButtons>
        </form>
    );
};

export default LoginPageForm;