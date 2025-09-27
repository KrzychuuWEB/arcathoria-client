import { paths } from "../../routes/paths.js";
import useNotification from "../../hooks/useNotification.jsx";
import { useNavigate } from "react-router-dom";

export const useCombatErrors = () => {
    const { errorNotification } = useNotification();
    const navigate = useNavigate();
    const pathname = paths.character.dashboard;

    const handleCombatErrors = (code) => {
        switch (code) {
            case "ERR_COMBAT_PARTICIPANT_NOT_FOUND_IN_COMBAT":
                errorNotification("Uczestnik nie jest przypisany do tej walki!");
                navigate(pathname);
                break;
            case "ERR_COMBAT_ACTION_TYPE":
                errorNotification("Błędny typ akcji!");
                break;
            case "ERR_COMBAT_NOT_FOUND-404":
                errorNotification("Nie znaleziono walki!");
                navigate(pathname);
                break;
            case "ERR_COMBAT_ALREADY_FINISHED":
                errorNotification("Nie możesz wykonać ruchu na zakończonej walce!");
                navigate(pathname);
                break;
            case "ERR_COMBAT_WRONG_TURN":
                errorNotification("Aktualnie jest tura przeciwnika!");
                break;
            default:
                errorNotification("Wystąpił nieznany błąd.");
        }
    };

    return { handleCombatErrors };
};
