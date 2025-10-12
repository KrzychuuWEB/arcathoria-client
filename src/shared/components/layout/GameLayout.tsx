import * as React from "react";
import GameSectionDock from "@shared/components/layout/game/GameSectionDock.tsx";
import GameTopMenu from "@shared/components/layout/game/GameTopMenu.tsx";

type GameLayoutProps = {
    children: React.ReactNode;
};

const GameLayout = ({ children }: GameLayoutProps) => {
    return (
        <>
            <GameTopMenu />
            <GameSectionDock />

            {children}
        </>
    );
};

export default GameLayout;
