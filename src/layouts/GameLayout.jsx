import PropTypes from "prop-types";
import GameTopAppBar from "./components/GameTopAppBar.jsx";
import GameLeftMenu from "./components/GameLeftMenu.jsx";

const GameLayout = ({ children }) => {
    return (
        <div className="h-screen w-full bg-[url('/gamebg.webp')] bg-cover bg-center bg-no-repeat">
            <GameTopAppBar />
            <GameLeftMenu />
            {children}
        </div>
    );
};

GameLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GameLayout;
