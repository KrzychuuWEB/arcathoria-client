import LandingLayout from "../layouts/LandingLayout.jsx";
import {paths} from "../routes/paths.js";
import PrimaryButton from "../components/buttons/PrimaryButton.jsx";

const HomePage = () => {
    return (
        <LandingLayout>
            <div className="flex justify-center items-center gap-5">
                <PrimaryButton href={paths.auth.login}>
                    Zaloguj się
                </PrimaryButton>

                <PrimaryButton href={paths.auth.register}>
                    Zarejestruj się
                </PrimaryButton>
            </div>
        </LandingLayout>
    );
};

export default HomePage;