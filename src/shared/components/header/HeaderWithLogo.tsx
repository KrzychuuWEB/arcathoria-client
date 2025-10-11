import { Link } from "react-router-dom";
import "./HeaderWithLogo.css";

const HeaderWithLogo = () => {
    return (
        <header className="text-center py-16 px-4">
            <h1 className="text-4xl md:text-6xl font-heading text-glow-title leading-tight">
                <Link to="/" className="gradient-text hover:opacity-90 transition-opacity">
                    Arcathoria
                </Link>
                <span className="block text-secondary tracking-widest font-heading text-lg mt-2 drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]">
                    The Spellforge
                </span>
            </h1>
        </header>
    );
};

export default HeaderWithLogo;
