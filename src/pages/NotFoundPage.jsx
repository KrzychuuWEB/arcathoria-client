import { paths } from "../routes/paths.js";

const NotFoundPage = () => {
    return (
        <div
            className={`h-screen w-full bg-[url('/notfound.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center`}
        >
            <div className="flex justify-center items-center flex-col gap-3">
                <h1 className="font-bold text-9xl text-white">404</h1>
                <h2 className="font-bold text-2xl text-white">Nie znaleziono strony</h2>
                <a
                    href={paths.home}
                    className="text-white underline hover:text-text-secondary transition duration-300 ease-in-out"
                >
                    Wróć do strony głównej
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;
