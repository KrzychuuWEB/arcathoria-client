import PropTypes from "prop-types";
import LandingHeader from "../headers/landingHeader.jsx";

const LandingTemplate = ({children}) => {
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

LandingTemplate.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LandingTemplate;