import { Outlet } from "react-router-dom";
import ImageBackground from "@shared/components/ImageBackground.tsx";
import RWDContainer from "@shared/components/RWDContainer.tsx";
import HeaderWithLogo from "@shared/components/header/HeaderWithLogo.tsx";
import CharacterTopMenu from "@features/character/components/CharacterTopMenu.tsx";

const CharacterLayout = () => {
    return (
        <ImageBackground src="/home_bg.png">
            <RWDContainer>
                <CharacterTopMenu
                    email="test@arcathoria.com"
                    characterCount={1}
                    maxSlots={4}
                    onLogout={() => console.log("Wyloguj")}
                    onOpenSettings={() => console.log("Ustawienia")}
                />

                <main>
                    <HeaderWithLogo />

                    <Outlet />
                </main>
            </RWDContainer>
        </ImageBackground>
    );
};

export default CharacterLayout;
