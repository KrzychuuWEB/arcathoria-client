import AccountContainer from "@features/account/components/AccountContainer.tsx";
import HeaderWithLogo from "@shared/components/header/HeaderWithLogo.tsx";
import LoginForm from "@features/account/forms/LoginForm.tsx";
import { Link } from "react-router-dom";
import { routes } from "@app/routes.ts";

const LoginPage = () => {
    return (
        <div>
            <HeaderWithLogo />

            <AccountContainer title="„Wypowiedz swoje Imię, a Runy rozpoznają twoją Duszę.”">
                <LoginForm />

                <p className="text-center text-sm text-gray-400 mt-6">
                    Nie masz konta?{" "}
                    <Link
                        to={routes.account.register}
                        className="text-secondary font-medium hover:underline hover:text-secondary-300 transition-colors"
                    >
                        Zarejestruj się
                    </Link>
                </p>
            </AccountContainer>
        </div>
    );
};

export default LoginPage;
