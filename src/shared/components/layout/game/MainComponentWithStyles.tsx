import React from "react";

type MainComponentWithStylesProps = {
    children: React.ReactNode;
};

export const MainComponentWithStyles = ({ children }: MainComponentWithStylesProps) => (
    <main className="min-h-screen pb-[calc(var(--mobile-nav-height,64px)+env(safe-area-inset-bottom))] lg:pb-0 lg:pl-[50px] [@media(min-width:1400px)]:pl-0 pt-40">
        {children}
    </main>
);
