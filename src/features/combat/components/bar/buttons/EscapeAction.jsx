import ActionButton from "./ActionButton.jsx";
import PropTypes from "prop-types";
import { Undo2Icon } from "lucide-react";

const EscapeAction = ({ onClick }) => {
    return (
        <ActionButton color="gray-500" onClick={onClick} isActive={true} title="Ucieczka">
            <Undo2Icon size={20} />
        </ActionButton>
    );
};

EscapeAction.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default EscapeAction;
