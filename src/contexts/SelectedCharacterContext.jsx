import { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import characterService from "../api/services/characterService.js";
import useNotification from "../hooks/useNotification.jsx";
import routesConfig from "../routes/config/routesConfig.js";
import { matchPath, useLocation } from "react-router-dom";

const SelectedCharacterContext = createContext();

export const SelectedCharacterProvider = ({ children }) => {
    const [character, setCharacter] = useState(null);
    const { warningNotification, successNotification } = useNotification();
    const [isLoaded, setIsLoaded] = useState(false);
    const location = useLocation();

    const isCharacterRequiredForCurrentRoute = (pathname) => {
        const route = Object.values(routesConfig).find((config) =>
            matchPath({ path: config.path, end: true }, pathname),
        );
        return route?.allowAuthenticatedWithCharacter ?? false;
    };

    const fetchSelectedCharacter = useCallback(async () => {
        const response = await characterService.getSelectedCharacter();

        if (response.success) {
            setCharacter(response.data);
        } else if (
            response.errorCode === "ERR_CHARACTER_SELECTED_NOT_FOUND-404" &&
            isCharacterRequiredForCurrentRoute(location.pathname)
        ) {
            warningNotification(response.message);
        }

        setIsLoaded(true);
    }, [warningNotification, location.pathname]);

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
            } else if (response.errorCode === "ERR_CHARACTER_NOT_FOUND-404") {
                warningNotification(response.message);
            }
        },
        [warningNotification],
    );

    const removeSelectedCharacter = () => {
        characterService.removeSelectedCharacter().then((response) => {
            if (response.success) {
                setCharacter(null);
                successNotification("Zostałeś/aś poprawnie wylogowany/a");
            } else if (response.errorCode === "ERR_CHARACTER_SELECTED_NOT_FOUND-404") {
                warningNotification(response.message);
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
