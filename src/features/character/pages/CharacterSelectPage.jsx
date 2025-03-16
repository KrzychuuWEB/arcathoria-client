import { characters } from "../../../inMemoryDB/characters.js";
import SelectCharacterItem from "../components/SelectCharacterItem.jsx";
import LandingLayout from "../../../layouts/LandingLayout.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../routes/paths.js";

const CharacterSelectPage = () => {
    const navigate = useNavigate();

    return (
        <LandingLayout>
            <div className="flex items-center justify-center">
                {characters.map((item) => (
                    <SelectCharacterItem key={item.name} character={item} />
                ))}
            </div>

            <div className="flex justify-center items-center mt-20">
                <PrimaryButton onClick={() => navigate(paths.character.create)}>
                    Stwórz postać
                </PrimaryButton>
            </div>
        </LandingLayout>
    );
};

export default CharacterSelectPage;
