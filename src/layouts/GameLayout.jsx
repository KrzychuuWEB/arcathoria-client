import PropTypes from "prop-types";

const GameLayout = ({children}) => {
    return (
        <div
            className="h-screen w-full bg-[url('/gamebg.webp')] bg-cover bg-center bg-no-repeat"
        >
            {children}
        </div>
    );
}

GameLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default GameLayout;