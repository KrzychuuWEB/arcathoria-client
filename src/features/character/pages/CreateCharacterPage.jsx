import LandingLayout from "../../../layouts/LandingLayout.jsx";
import CreateCharacterForm from "../forms/CreateCharacterForm.jsx";
import AuthContainer from "../../account/components/AuthContainer.jsx";

const CharacterPage = () => {
    return (
        <LandingLayout>
            <AuthContainer title="Stwórz nową postać">
                <CreateCharacterForm />
            </AuthContainer>
        </LandingLayout>
    );
};

export default CharacterPage;
