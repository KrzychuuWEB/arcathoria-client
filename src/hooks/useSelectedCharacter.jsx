import { useContext } from "react";
import SelectedCharacterContext from "../contexts/SelectedCharacterContext.jsx";

const useSelectedCharacter = () => {
    const context = useContext(SelectedCharacterContext);

    if (!context) {
        throw new Error("useSelectedCharacter must be used within an SelectedCharacterProvider");
    }

    return context;
};

export default useSelectedCharacter;
