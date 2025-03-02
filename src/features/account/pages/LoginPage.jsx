import LandingLayout from "../../../layouts/LandingLayout.jsx";
import LoginPageForm from "../forms/LoginForm.jsx";
import AuthContainer from "../components/AuthContainer.jsx";
import { paths } from "../../../routes/paths.js";
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <LandingLayout>
            <AuthContainer title="Zaloguj się">
                <LoginPageForm />

                <p className="text-white text-center mt-5">
                    Chcesz dołączyć do świata magii?{" "}
                    <Link
                        to={paths.auth.register}
                        className="underline font-bold text-text-highlight"
                    >
                        Zarejestruj się
                    </Link>{" "}
                    już teraz!
                </p>
            </AuthContainer>
        </LandingLayout>
    );
};

export default LoginPage;
