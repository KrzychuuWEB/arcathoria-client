import { paths } from "../../routes/paths.js";
import { Link } from "react-router-dom";

const LandingHeader = () => {
    return (
        <header className="w-full p-5 flex items-center justify-center text-center">
            <div>
                <h1 className="font-heading text-text-light font-bold text-5xl">
                    <Link
                        to={paths.home}
                        className="hover:text-primary transition-colors duration-300 ease-in-out"
                    >
                        Arcathoria
                    </Link>
                </h1>
                <span className="font-normal ml-2 bg-black bg-opacity-50 p-2 text-base uppercase text-text-highlight">
                    pre-alpha v0.1
                </span>
            </div>
        </header>
    );
};

export default LandingHeader;
