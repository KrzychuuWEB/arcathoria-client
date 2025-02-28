import LandingLayout from "../../../layouts/LandingLayout.jsx";
import AuthContainer from "../components/AuthContainer.jsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import ResetPasswordForm from "../forms/ResetPasswordForm.jsx";
import {useEffect, useState} from "react";
import {paths} from "../../../routes/paths.js";

const ResetPasswordPage = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate(paths.home);
        }

        console.log(token);
    }, [token, navigate]);

    return (
        <LandingLayout>
            <AuthContainer title="Resetowanie hasła">
                <ResetPasswordForm setIsSuccess={setIsSuccess}/>

                {
                    isSuccess && <p className="text-center text-text-highlight font-bold mt-3">Hasło zostało pomyślnie
                        zresetowane!</p>
                }
            </AuthContainer>
        </LandingLayout>
    );
};

export default ResetPasswordPage;