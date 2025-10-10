import { Outlet } from "react-router-dom";
import Container from "@shared/components/Container.tsx";
import ImageBackground from "@shared/components/ImageBackground.tsx";

const AccountLayout = () => {
    return (
        <ImageBackground src="../../../../public/home_bg.png">
            <Container>
                <main>
                    <Outlet />
                </main>
            </Container>
        </ImageBackground>
    );
};

export default AccountLayout;
