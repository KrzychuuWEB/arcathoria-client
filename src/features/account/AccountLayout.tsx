import { Outlet } from "react-router-dom";
import Container from "@shared/components/Container.tsx";

const AccountLayout = () => {
    return (
        <Container>
            <Outlet />
        </Container>
    );
};

export default AccountLayout;
