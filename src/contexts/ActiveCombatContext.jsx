import { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import combatService from "../api/services/combatService.js";
import useAuth from "../hooks/useAuth.jsx";
import useSelectedCharacter from "../hooks/useSelectedCharacter.jsx";

const ActiveCombatContext = createContext();

export const ActiveCombatProvider = ({ children }) => {
    const [activeCombatId, setActiveCombatId] = useState(null);
    const [isCombatLoaded, setIsCombatLoaded] = useState(false);
    const { token } = useAuth();
    const {
        character,
        hasSelectedCharacter,
        isLoaded: isSelectedCharacterLoaded,
    } = useSelectedCharacter();

    const setActiveCombat = useCallback((combatId) => {
        setActiveCombatId(combatId ?? null);
        setIsCombatLoaded(true);
    }, []);

    const clearActiveCombat = useCallback(() => {
        setActiveCombatId(null);
        setIsCombatLoaded(true);
    }, []);

    const refreshActiveCombat = useCallback(async () => {
        if (!token || !hasSelectedCharacter()) {
            clearActiveCombat();
            return { success: false };
        }

        setIsCombatLoaded(false);

        try {
            const response = await combatService.getActiveCombatForSelectedCharacter();

            if (response.success && response.data) {
                setActiveCombat(response.data.combatId);
                return response;
            }

            if (response.code === "ERR_PARTICIPANT_NOT_HAS_ACTIVE_COMBAT-404") {
                clearActiveCombat();
            } else {
                setIsCombatLoaded(true);
            }

            return response;
        } catch (error) {
            setIsCombatLoaded(true);
            return { success: false, error };
        }
    }, [token, hasSelectedCharacter, clearActiveCombat, setActiveCombat]);

    const selectedCharacterId = character?.id ?? null;

    useEffect(() => {
        if (!token) {
            clearActiveCombat();
            return;
        }

        if (!isSelectedCharacterLoaded) {
            return;
        }

        if (!hasSelectedCharacter()) {
            clearActiveCombat();
            return;
        }

        refreshActiveCombat();
    }, [
        token,
        selectedCharacterId,
        isSelectedCharacterLoaded,
        hasSelectedCharacter,
        refreshActiveCombat,
        clearActiveCombat,
    ]);

    return (
        <ActiveCombatContext.Provider
            value={{
                activeCombatId,
                isCombatLoaded,
                refreshActiveCombat,
                setActiveCombat,
                clearActiveCombat,
            }}
        >
            {children}
        </ActiveCombatContext.Provider>
    );
};

ActiveCombatProvider.propTypes = {
    children: PropTypes.node,
};

export default ActiveCombatContext;
