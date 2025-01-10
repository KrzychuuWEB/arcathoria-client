import LoginPageForm from "./form.jsx";

const LoginPage = () => {

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-arcathoria-default bg-cover bg-center">
            <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-4xl font-extrabold text-center text-purple-200 font-magic">Arcathoria</h1>

                <LoginPageForm/>

                <p className="text-center text-arcane-purple-400 mt-4">
                    Nie czekaj, załóż konto już teraz!
                    <a href="#" className="text-purple-200 hover:underline">Rejestracja</a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;