const GameLeftMenu = () => {
    return (
        <div className="w-[120px] fixed left-0 top-1/2 transform -translate-y-1/2 text-white flex flex-col gap-2 items-center">
            <div className="bg-black bg-opacity-40 p-5">
                <p>Wyprawa</p>
                <p>Walka PVP</p>
                <p>Zaklęcia</p>
                <p>Sklep</p>
                <p>Akademia</p>
            </div>
        </div>
    );
};

export default GameLeftMenu;
