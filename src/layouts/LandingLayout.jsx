import PropTypes from "prop-types";
import LandingHeader from "./components/LandingHeader.jsx";

const LandingLayout = ({children}) => {
    return (
        <div
            className="h-screen w-full bg-[url('/src/assets/background.webp')] bg-cover bg-center bg-no-repeat"
        >
            <LandingHeader/>
            
            <main className="pt-[80px] pr-5 pl-5">
                {children}
            </main>
        </div>
    );
};

LandingLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LandingLayout;