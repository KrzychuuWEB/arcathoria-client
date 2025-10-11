import { Outlet } from "react-router-dom";
import RWDContainer from "@shared/components/RWDContainer.tsx";
import ImageBackground from "@shared/components/ImageBackground.tsx";

const AccountLayout = () => {
    return (
        <ImageBackground src="/home_bg.png">
            <RWDContainer>
                <main>
                    <Outlet />
                </main>
            </RWDContainer>
        </ImageBackground>
    );
};

export default AccountLayout;
