import PropTypes from "prop-types";
import GameTopAppBar from "./components/GameTopAppBar.jsx";
import GameLeftMenu from "./components/GameLeftMenu.jsx";
import BackgroundImage from "./components/BackgroundImage.jsx";

const GameLayout = ({children, background}) => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <BackgroundImage imageUrl={background}/>

            <div className="relative z-10">
                <GameTopAppBar/>
                <GameLeftMenu/>
                <div className="pl-[160px] pt-5">
                    {children}
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
