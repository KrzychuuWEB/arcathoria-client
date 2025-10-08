import PropTypes from "prop-types";

const BackgroundImage = ({ imageUrl }) => (
    <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
    />
);

BackgroundImage.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};

export default BackgroundImage;
