import LandingLayout from "../../../layouts/LandingLayout.jsx";
import AuthContainer from "../components/AuthContainer.jsx";
import RegisterForm from "../forms/RegisterForm.jsx";

const RegisterPage = () => {
    return (
        <LandingLayout>
            <AuthContainer title="Zarejestruj się">
                <RegisterForm/>

                <p className="text-white text-center mt-5">Dołącz i rozpocznij swoją <span
                    className="font-bold text-text-highlight">przygodę</span> już teraz!</p>
            </AuthContainer>
        </LandingLayout>
    );
};

export default RegisterPage;