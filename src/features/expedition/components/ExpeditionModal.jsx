import PropTypes from "prop-types";
import "./css/modal.css";

const ExpeditionModal = ({ isOpen, onClose, expedition, onStartFight }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="modal-container relative w-full max-w-2xl p-8 rounded-2xl shadow-glow">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl"
                >
                    ✖
                </button>

                <h2 className="text-4xl font-bold text-text-light mb-4 text-center font-fantasy">
                    {expedition.name}
                </h2>

                <p className="text-text-light italic text-center mb-6">{expedition.story}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <h3 className="text-xl font-semibold text-complementary-green">
                            Wzmocnienia
                        </h3>
                        <ul className="list-disc list-inside text-text-light">
                            {expedition.bonuses.map((bonus, idx) => (
                                <li key={idx}>{bonus}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-complementary-red">Osłabienia</h3>
                        <ul className="list-disc list-inside text-text-light">
                            {expedition.penalties.map((penalty, idx) => (
                                <li key={idx}>{penalty}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="text-center mb-6">
                    <span className="inline-block bg-gray-600 text-text-light text-sm px-4 py-2 rounded-full">
                        Poziom trudności: {expedition.difficulty}
                    </span>
                </div>

                <div className="text-text-light text-center mb-8">
                    <h4 className="text-lg font-semibold mb-2">Charakterystyka Biomów</h4>
                    <p>{expedition.characteristics}</p>
                </div>

                <div className="flex justify-center gap-6">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-lg transition"
                    >
                        Uciekaj
                    </button>

                    <button
                        onClick={onStartFight}
                        className="px-6 py-2 bg-primary hover:bg-primary-600 text-white font-bold rounded-lg text-lg transition"
                    >
                        Wejdź do walki
                    </button>
                </div>
            </div>
        </div>
    );
};

ExpeditionModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onStartFight: PropTypes.func.isRequired,
    expedition: PropTypes.shape({
        name: PropTypes.string.isRequired,
        story: PropTypes.string.isRequired,
        difficulty: PropTypes.string.isRequired,
        bonuses: PropTypes.arrayOf(PropTypes.string).isRequired,
        penalties: PropTypes.arrayOf(PropTypes.string).isRequired,
        characteristics: PropTypes.string.isRequired,
    }).isRequired,
};

export default ExpeditionModal;
