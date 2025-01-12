import LandingTemplate from "../../components/templates/landingTemplate.jsx";
import LoginPageForm from "./form.jsx";
import {path} from "../../utils/routes.js";

const LoginPage = () => {

    return (
        <LandingTemplate>
            <div className="flex items-center justify-center flex-col mt-[200px]">
                <div className="relative bg-black bg-opacity-60 rounded-xl w-[500px] p-6">
                    <img
                        src="/src/assets/mag.png"
                        alt="Mag"
                        width={240}
                        height={240}
                        className="absolute top-[-220px] left-[28%]"
                    />

                    <h2 className="font-heading text-text-light">Zaloguj się</h2>

                    <LoginPageForm/>

                    <img
                        src="/src/assets/crystal.png"
                        alt="Crystal"
                        width={120}
                        height={120}
                        className="absolute bottom-[-5px] right-[-70px]"
                    />
                </div>
                <p className="text-text-light">
                    Chcesz dołączyć do magicznej społeczności? <a href={path.register}
                                                                  className="font-tooltip text-text-highlight underline transition duration-300 ease-in-out hover:text-secondary-300">Zarejestruj</a> się
                    już teraz!
                </p>
            </div>
        </LandingTemplate>
    );
}

export default LoginPage;