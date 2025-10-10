import AccountHeaderContainer from "@features/account/components/AccountHeaderContainer.tsx";
import AccountContainer from "@features/account/components/AccountContainer.tsx";
import RegisterForm from "@features/account/forms/RegisterForm.tsx";
import { Link } from "react-router-dom";
import { routes } from "@app/routes.ts";

const RegisterPage = () => {
    return (
        <div>
            <AccountHeaderContainer />

            <AccountContainer title="„Każda legenda zaczyna się od jednej iskry magii.”">
                <RegisterForm />

                <p className="text-center text-sm text-gray-400 mt-6">
                    Masz już konto?{" "}
                    <Link
                        to={routes.account.login}
                        className="text-yellow-400 font-medium hover:underline hover:text-yellow-300 transition-colors"
                    >
                        Zaloguj się
                    </Link>
                </p>
            </AccountContainer>
        </div>
    );
};

export default RegisterPage;
