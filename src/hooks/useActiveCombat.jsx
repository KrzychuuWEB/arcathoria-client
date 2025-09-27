import { useContext } from "react";
import ActiveCombatContext from "../contexts/ActiveCombatContext.jsx";

const useActiveCombat = () => {
    const context = useContext(ActiveCombatContext);

    if (!context) {
        throw new Error("useActiveCombat must be used within an ActiveCombatProvider");
    }

    return context;
};

export default useActiveCombat;
