import RWDContainer from "@shared/components/RWDContainer.tsx";
import ImageBackground from "@shared/components/ImageBackground.tsx";
import { Outlet } from "react-router-dom";
import GameLayout from "@shared/components/layout/GameLayout.tsx";

const CombatLayout = () => {
    return (
        <GameLayout>
            <ImageBackground src="/combat_forest.png">
                <RWDContainer>
                    <main className="min-h-screen pb-[calc(var(--mobile-nav-height,64px)+env(safe-area-inset-bottom))] lg:pb-0 lg:pl-[50px] [@media(min-width:1400px)]:pl-0 pt-20">
                        <Outlet />
                    </main>
                </RWDContainer>
            </ImageBackground>
        </GameLayout>
    );
};

export default CombatLayout;
