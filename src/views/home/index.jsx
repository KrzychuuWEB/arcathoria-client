import LandingTemplate from "../../components/templates/landingTemplate.jsx";
import {path} from "../../utils/routes.js";
import LandingButton from "../../components/buttons/landingButton.jsx";

const HomePage = () => {
    return (
        <LandingTemplate>
            <div className="flex justify-center items-center gap-5">
                <LandingButton href={path.login}>
                    Zaloguj się
                </LandingButton>

                <LandingButton href={path.register}>
                    Zarejestruj się
                </LandingButton>
            </div>
        </LandingTemplate>
    );
};

export default HomePage;