import {paths} from "../../../routes/paths.js";
import {useFormik} from "formik";
import {registerValidationSchema} from "../validations/registerValidation.js";
import AuthFlexButtons from "../components/AuthFlexButtons.jsx";
import AuthHelperLink from "../components/AuthHelperLink.jsx";
import TextFieldWithLabel from "../../../components/fields/TextFieldWithLabel.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";

const RegisterForm = () => {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            repeatPassword: "",
        },
        validationSchema: registerValidationSchema,
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} autoComplete="off">
            <TextFieldWithLabel formik={formik} label="Nazwa postaci" name="username"/>
            <TextFieldWithLabel formik={formik} label="Email" name="email"/>
            <div className="gap-4 flex justify-between items-start">
                <TextFieldWithLabel formik={formik} label="Hasło" name="password"/>
                <TextFieldWithLabel formik={formik} label="Powtórz hasło" name="repeatPassword"/>
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