import ActionButton from "./ActionButton.jsx";
import { Sword } from "lucide-react";
import PropTypes from "prop-types";

const WandAttackAction = ({ onClick, isActive }) => {
    return (
        <ActionButton
            color="complementary-red-600"
            onClick={onClick}
            isActive={isActive}
            title="Atak róźdżką"
        >
            <Sword size={20} />
        </ActionButton>
    );
};

WandAttackAction.propTypes = {
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
};

export default WandAttackAction;
