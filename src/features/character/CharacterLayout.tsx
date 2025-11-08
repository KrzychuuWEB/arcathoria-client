import { Outlet } from "react-router-dom";
import ImageBackground from "@shared/components/ImageBackground.tsx";
import RWDContainer from "@shared/components/RWDContainer.tsx";
import HeaderWithLogo from "@shared/components/header/HeaderWithLogo.tsx";
import CharacterTopMenu from "@features/character/components/CharacterTopMenu.tsx";

const CharacterLayout = () => {
    return (
        <ImageBackground src="/home_bg.png">
            <RWDContainer>
                <CharacterTopMenu />

                <main>
                    <HeaderWithLogo />

                    <Outlet />
                </main>
            </RWDContainer>
        </ImageBackground>
    );
};

export default CharacterLayout;
