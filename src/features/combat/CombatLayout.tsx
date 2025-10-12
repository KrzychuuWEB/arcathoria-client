import RWDContainer from "@shared/components/RWDContainer.tsx";
import ImageBackground from "@shared/components/ImageBackground.tsx";
import { Outlet } from "react-router-dom";
import GameTopMenu from "@features/combat/components/GameTopMenu.tsx";
import GameSectionDock from "@shared/components/layout/game/GameSectionDock.tsx";

const CombatLayout = () => {
    return (
        <ImageBackground src="/combat_forest.png">
            <RWDContainer>
                <GameTopMenu
                    playerName={"Magcienia Magowe"}
                    avatarUrl={"/default_avatar.png"}
                    level={10}
                    hp={120}
                    hpMax={120}
                    mp={100}
                    mpMax={100}
                    energy={50}
                    energyMax={100}
                    xp={5000}
                    xpToLevel={5500}
                    gold={512512}
                    crystals={121}
                    onOpenCharacter={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                    onOpenInventory={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                    onOpenMail={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                    onOpenSettings={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                    onLogout={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />

                <GameSectionDock />

                <main className="min-h-screen pb-[calc(var(--mobile-nav-height,64px)+env(safe-area-inset-bottom))] lg:pb-0 lg:pl-[50px] [@media(min-width:1400px)]:pl-0 pt-20">
                    <Outlet />
                </main>
            </RWDContainer>
        </ImageBackground>
    );
};

export default CombatLayout;
