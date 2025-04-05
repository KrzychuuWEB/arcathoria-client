import LandingLayout from "../layouts/LandingLayout.jsx";
import { paths } from "../routes/paths.js";
import PrimaryButton from "../components/buttons/PrimaryButton.jsx";

const HomePage = () => {
    return (
        <LandingLayout>
            <div className="flex justify-center items-center">
                <div className="w-[800px] mt-[50px] text-center">
                    <h2
                        className="text-white font-bold text-5xl"
                        style={{ textShadow: "4px 2px 0px rgba(66, 68, 90, 1)" }}
                    >
                        Pradawna Moc Przebudziła Się…
                        <br /> Czy Masz Odwagę Po Nią Sięgnąć?
                    </h2>

                    <h3
                        className="text-white text-center text-md mt-3"
                        style={{ textShadow: "1px 1px 0px rgba(66, 68, 90, 1)" }}
                    >
                        Dawno zapomniane zaklęcia i pradawne moce czekają na tych, którzy odważą się
                        je odkryć
                        <br /> Zostań mistrzem magii w Arcathorii!
                    </h3>

                    <div className="flex justify-center items-center gap-5 mt-5">
                        <PrimaryButton href={paths.account.login}>
                            Wejdź do Świata Magii
                        </PrimaryButton>

                        <PrimaryButton href={paths.account.register}>
                            Dołącz do Arcathorii
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
};

export default HomePage;
