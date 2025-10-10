import { Outlet } from "react-router-dom";
import ImageBackground from "@shared/components/ImageBackground.tsx";
import RWDContainer from "@shared/components/RWDContainer.tsx";
import HeaderWithLogo from "@shared/components/header/HeaderWithLogo.tsx";

const CharacterLayout = () => {
    return (
        <ImageBackground src="../../../../public/home_bg.png">
            <RWDContainer>
                <main>
                    <HeaderWithLogo />

                    <Outlet />
                </main>
            </RWDContainer>
        </ImageBackground>
    );
};

export default CharacterLayout;
