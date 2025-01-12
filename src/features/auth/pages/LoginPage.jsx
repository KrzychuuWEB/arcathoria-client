import LandingLayout from "../../../layouts/LandingLayout.jsx";
import LoginPageForm from "../forms/LoginForm.jsx";
import AuthContainer from "../components/AuthContainer.jsx";
import {paths} from "../../../routes/paths.js";

const LoginPage = () => {
    return (
        <LandingLayout>
            <AuthContainer title="Zaloguj się">
                <LoginPageForm/>

                <p className="text-white text-center mt-5">Chcesz dołączyć do świata magii? <a
                    href={paths.auth.register}
                    className="underline font-bold text-text-highlight">Zarejestruj
                    się</a> już teraz!</p>
            </AuthContainer>
        </LandingLayout>
    );
}

export default LoginPage;