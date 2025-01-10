import {useFormik} from "formik";
import * as Yup from 'yup';
import DefaultButton from "../../components/buttons/default.jsx";
import DefaultTextField from "../../components/fields/default.jsx";

const validationSchema = Yup.object({
    email: Yup.string().email('Nieprawidłowy email').required('Email jest wymagany'),
    password: Yup.string().min(6, 'Hasło musi mieć co najmniej 6 znaków').required('Hasło jest wymagane'),
});

const LoginPageForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values, {setSubmitting}) => {
            console.log(values);
            setSubmitting(false);
        }
    })

    return (
        <form className="mt-6" autoComplete="off" onSubmit={formik.handleSubmit}>
            <DefaultTextField
                formik={formik}
                label="Email"
                name="email"
                placeholder="Wpisz swój email"
            />

            <DefaultTextField
                formik={formik}
                label="Hasło"
                name="password"
                type="password"
                placeholder="Wpisz swoje hasło"
            />

            <DefaultButton
                disabled={formik.isSubmitting}
                type="submit"
            >
                Zaloguj się
            </DefaultButton>
        </form>
    );
};

export default LoginPageForm;