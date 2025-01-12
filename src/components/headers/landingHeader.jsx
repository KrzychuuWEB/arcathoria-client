import {path} from "../../utils/routes.js";

const LandingHeader = () => {
    return (
        <header className="w-full p-5 flex items-center justify-center">
            <div>
                <h1 className="font-heading text-text-light font-bold text-5xl">
                    <a href={path.home} className="hover:text-primary transition-colors duration-300 ease-in-out">
                        Arcathoria
                    </a>
                </h1>
            </div>
        </header>
    );
};

export default LandingHeader;