import LandingLayout from "../../../layouts/LandingLayout.jsx";
import AuthContainer from "../components/AuthContainer.jsx";
import RecoveryPasswordForm from "../forms/RecoveryPasswordForm.jsx";

const RecoveryPasswordPage = () => {
    return (
        <LandingLayout>
            <AuthContainer title="Ozdyskaj hasło">
                <RecoveryPasswordForm />

                <p className="text-white text-center mt-5">
                    Odzyskaj hasło i wróć do krainy{" "}
                    <span className="font-bold text-text-highlight">magii</span>
                </p>
            </AuthContainer>
        </LandingLayout>
    );
};

export default RecoveryPasswordPage;
