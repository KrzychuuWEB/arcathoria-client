import LandingTemplate from "../../components/templates/landingTemplate.jsx";
import AuthContainer from "../login/AuthContainer.jsx";
import RegisterForm from "./form.jsx";

const RegisterPage = () => {
    return (
        <LandingTemplate>
            <AuthContainer>
                <h2 className="font-heading text-center text-text-light mb-4">Zarejestruj się</h2>

                <RegisterForm/>
            </AuthContainer>
        </LandingTemplate>
    );
};

export default RegisterPage;