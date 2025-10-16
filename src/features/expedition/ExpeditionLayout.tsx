import RWDContainer from "@shared/components/RWDContainer.tsx";
import ImageBackground from "@shared/components/ImageBackground.tsx";
import { Outlet } from "react-router-dom";
import GameLayout from "@shared/components/layout/GameLayout.tsx";
import { MainComponentWithStyles } from "@shared/components/layout/game/MainComponentWithStyles.tsx";

const ExpeditionLayout = () => {
    return (
        <GameLayout>
            <ImageBackground src="/expedition_bg.png">
                <RWDContainer>
                    <MainComponentWithStyles>
                        <Outlet />
                    </MainComponentWithStyles>
                </RWDContainer>
            </ImageBackground>
        </GameLayout>
    );
};

export default ExpeditionLayout;
