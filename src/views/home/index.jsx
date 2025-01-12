import LandingLink from "../../components/buttons/landingLink.jsx";
import LandingTemplate from "../../components/templates/landingTemplate.jsx";
import {path} from "../../utils/routes.js";

const HomePage = () => {
    return (
        <LandingTemplate>
            <div className="flex justify-center items-center gap-5">
                <LandingLink href={path.login}>
                    Zaloguj się
                </LandingLink>

                <LandingLink href={path.login}>
                    Zarejestruj się
                </LandingLink>
            </div>
        </LandingTemplate>
    );
};

export default HomePage;