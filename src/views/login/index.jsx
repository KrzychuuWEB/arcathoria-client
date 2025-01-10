const LoginPage = () => {

    return (
        <div
            className="flex items-center justify-center min-h-screen bg-arcathoria-default bg-cover bg-center">
            <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-4xl font-extrabold text-center text-purple-200 font-magic">Arcathoria</h1>
                <form className="mt-6" autoComplete="off">
                    <div className="mb-4">
                        <label className="block text-purple-200 font-medium mb-2" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-purple-500 rounded-lg bg-gray-900 text-purple-100 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-purple-200 font-medium mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-purple-500 rounded-lg bg-gray-900 text-purple-100 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                    >
                        Wejdź do świata magii!
                    </button>
                </form>
                <p className="text-center text-purple-400 mt-4">
                    Nie czekaj, załóż konto już teraz! <a href="#"
                                                          className="text-purple-200 hover:underline">Rejestracja</a>
                </p>
            </div>
        </div>
    );
}

export default LoginPage;