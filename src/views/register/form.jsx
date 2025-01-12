import DefaultTextField from "../../components/fields/default.jsx";
import LandingButton from "../../components/buttons/landingButton.jsx";
import {path} from "../../utils/routes.js";
import {useFormik} from "formik";
import {registerValidationSchema} from "./registerValidation.js";

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
            <DefaultTextField formik={formik} label="Nazwa postaci" name="username"/>
            <DefaultTextField formik={formik} label="Email" name="email"/>
            <div className="gap-4 flex justify-between items-start">
                <DefaultTextField formik={formik} label="Hasło" name="password"/>
                <DefaultTextField formik={formik} label="Powtórz hasło" name="repeatPassword"/>
            </div>
            <div className="flex justify-between items-center pr-5 pl-5 mt-5">
                <LandingButton href={path.login}>
                    Zaloguj się
                </LandingButton>

                <LandingButton type="submit">
                    Zarejestruj się
                </LandingButton>
            </div>
        </form>
    );
};

export default RegisterForm;