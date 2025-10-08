import { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import characterService from "../api/services/characterService.js";
import useNotification from "../hooks/useNotification.jsx";

const SelectedCharacterContext = createContext();

export const SelectedCharacterProvider = ({ children }) => {
    const [character, setCharacter] = useState(null);
    const { warningNotification, successNotification } = useNotification();
    const [isLoaded, setIsLoaded] = useState(false);

    const clearSelectedCharacter = useCallback(() => {
        setCharacter(null);
    }, []);

    const fetchSelectedCharacter = useCallback(async () => {
        const response = await characterService.getSelectedCharacter();

        if (response.success) {
            setCharacter(response.data);
        } else if (response.code === "ERR_CHARACTER_SELECTED_NOT_FOUND") {
            clearSelectedCharacter();
        }

        setIsLoaded(true);
    }, [clearSelectedCharacter]);

    useEffect(() => {
        if (!isLoaded) {
            fetchSelectedCharacter();
        }
    }, []);

    const selectCharacterById = useCallback(
        async (id) => {
            const response = await characterService.selectCharacter({ characterId: id });

            if (response.success) {
                setCharacter(response.data);
            } else if (response.code === "ERR_CHARACTER_NOT_FOUND-404") {
                warningNotification(response.message);
            }
        },
        [warningNotification],
    );

    const removeSelectedCharacter = () => {
        characterService.removeSelectedCharacter().then((response) => {
            if (response.success) {
                clearSelectedCharacter();
                successNotification("Zostałeś/aś poprawnie wylogowany/a");
            } else if (response.code === "ERR_CHARACTER_SELECTED_NOT_FOUND") {
                warningNotification(response.message);
                clearSelectedCharacter();
            }
        });
    };

    const hasSelectedCharacter = useCallback(() => {
        return character !== null;
    }, [character]);

    return (
        <SelectedCharacterContext.Provider
            value={{
                character,
                hasSelectedCharacter,
                selectCharacterById,
                isLoaded,
                removeSelectedCharacter,
                clearSelectedCharacter,
            }}
        >
            {children}
        </SelectedCharacterContext.Provider>
    );
};

SelectedCharacterProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SelectedCharacterContext;
