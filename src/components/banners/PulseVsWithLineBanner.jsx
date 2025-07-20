const PulseVsWithLineBanner = () => {
    return (
        <div className="relative w-[500px] mx-auto p-10">
            <div className="absolute top-1/2 left-0 w-full border-t border-secondary opacity-60 transform -translate-y-1/2 z-0" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 px-4 bg-opacity-80 rounded-full">
                <span className="text-4xl font-heading text-text-highlight drop-shadow-md animate-pulse">
                    VS
                </span>
            </div>
        </div>
    );
};

export default PulseVsWithLineBanner;
