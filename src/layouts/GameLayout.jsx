import PropTypes from "prop-types";
import GameTopAppBar from "./components/GameTopAppBar.jsx";
import GameLeftMenu from "./components/GameLeftMenu.jsx";
import BackgroundImage from "./components/BackgroundImage.jsx";

const GameLayout = ({ children, background }) => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <BackgroundImage imageUrl={background} />

            <div className="relative z-10">
                <GameTopAppBar />
                <GameLeftMenu />
                <div className="w-full max-w-[1200px] mx-auto px-4">
                    <div className="pt-5">{children}</div>
                </div>
            </div>
        </div>
    );
};

GameLayout.propTypes = {
    children: PropTypes.node.isRequired,
    background: PropTypes.string.isRequired,
};

export default GameLayout;
