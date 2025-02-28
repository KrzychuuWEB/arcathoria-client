import PropTypes from "prop-types";

const AuthContainer = ({children, title}) => {
    return (
        <div className="flex items-center justify-center flex-col mt-[170px]">
            <div className="relative bg-black bg-opacity-60 rounded-xl w-[500px] p-6">
                <img
                    src="/src/assets/mag.png"
                    alt="Mag"
                    width={240}
                    height={240}
                    className="absolute top-[-220px] left-[26%]"
                />

                <h2 className="font-heading text-center text-text-light mb-4 text-xl font-bold">{title}</h2>

                {children}

                <img
                    src="/src/assets/crystal.png"
                    alt="Crystal"
                    width={120}
                    height={120}
                    className="absolute bottom-[-5px] right-[-70px]"
                />
            </div>
        </div>
    );
};

AuthContainer.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
}

export default AuthContainer;