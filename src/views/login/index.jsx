import LandingTemplate from "../../components/templates/landingTemplate.jsx";
import LoginPageForm from "./form.jsx";
import AuthContainer from "./AuthContainer.jsx";

const LoginPage = () => {

    return (
        <LandingTemplate>
            <AuthContainer>
                <h2 className="font-heading text-center text-text-light">Zaloguj się</h2>

                <LoginPageForm/>
            </AuthContainer>
        </LandingTemplate>
    );
}

export default LoginPage;