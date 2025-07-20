import { useFormik } from "formik";
import { recoveryPasswordSchema } from "../validations/recoveryPasswordValidation.js";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import TextFieldWithLabel from "../../../components/fields/TextFieldWithLabel.jsx";
import AuthHelperLink from "../components/AuthHelperLink.jsx";
import { paths } from "../../../routes/paths.js";
import AuthFlexButtons from "../components/AuthFlexButtons.jsx";

const RecoveryPasswordForm = () => {
    const formik = useFormik({
        initialValues: { email: "" },
        validationSchema: recoveryPasswordSchema,
        onSubmit: (values) => {
            formik.setSubmitting(false);
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} autoComplete="off">
            <TextFieldWithLabel formik={formik} name="email" label="Email" />

            <AuthFlexButtons>
                <AuthHelperLink href={paths.account.login} title="Zaloguj się" />

                <PrimaryButton disabled={formik.isSubmitting} type="submit">
                    Przypomnij hasło
                </PrimaryButton>
            </AuthFlexButtons>
        </form>
    );
};

export default RecoveryPasswordForm;
