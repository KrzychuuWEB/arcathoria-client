import PropTypes from "prop-types";

const SelectCharacterItem = ({character}) => {
    return (
        <div className="w-[150px] h-[200] m-5 p-3">
            {
                character.name
            }
        </div>
    );
};

SelectCharacterItem.propTypes = {
    character: PropTypes.object.isRequired,
}

export default SelectCharacterItem;