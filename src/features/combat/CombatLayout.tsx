import RWDContainer from "@shared/components/RWDContainer.tsx";
import ImageBackground from "@shared/components/ImageBackground.tsx";
import { Outlet } from "react-router-dom";
import GameLayout from "@shared/components/layout/GameLayout.tsx";
import { MainComponentWithStyles } from "@shared/components/layout/game/MainComponentWithStyles.tsx";

const CombatLayout = () => {
    return (
        <GameLayout>
            <ImageBackground src="/combat_forest.png">
                <RWDContainer>
                    <MainComponentWithStyles>
                        <Outlet />
                    </MainComponentWithStyles>
                </RWDContainer>
            </ImageBackground>
        </GameLayout>
    );
};

export default CombatLayout;
