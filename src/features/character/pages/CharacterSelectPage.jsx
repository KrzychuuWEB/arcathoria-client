import {characters} from "../../../inMemoryDB/characters.js";
import SelectCharacterItem from "../components/SelectCharacterItem.jsx";
import LandingLayout from "../../../layouts/LandingLayout.jsx";

const CharacterSelectPage = () => {
    return (
        <LandingLayout>
            <div className="flex items-center justify-center">
                {
                    characters.map((item) => (
                        <SelectCharacterItem key={item.name} character={item}/>
                    ))
                }
            </div>
        </LandingLayout>
    );
};

export default CharacterSelectPage;