import LandingLayout from "../../../layouts/LandingLayout.jsx";
import PrimaryButton from "../../../components/buttons/PrimaryButton.jsx";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../routes/paths.js";
import { useEffect, useState } from "react";
import characterService from "../../../api/services/characterService.js";
import SelectCharacterItem from "../components/SelectCharacterItem.jsx";

const CharacterSelectPage = () => {
    const navigate = useNavigate();
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        characterService.getAllMyCharacters().then((response) => {
            if (response === null) {
                setCharacters(null);
            } else {
                setCharacters(response);
            }
        });
    }, []);

    return (
        <LandingLayout>
            {characters !== null ? (
                <div className="flex items-center justify-center">
                    {characters.map((item) => (
                        <SelectCharacterItem key={item.id} character={item} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-white text-2xl">
                    Brak postaci do wyświetlenia, najpierw ją dodaj.
                </p>
            )}

            <div className="flex justify-center items-center mt-20">
                <PrimaryButton onClick={() => navigate(paths.character.create)}>
                    Stwórz postać
                </PrimaryButton>
            </div>
        </LandingLayout>
    );
};

export default CharacterSelectPage;
