import * as React from "react";

type BlurContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const BlurContainer = ({ children, className }: BlurContainerProps) => {
    return (
        <div
            className={`rounded-2xl border border-primary/40 bg-black/30 backdrop-blur-md p-5 shadow-[0_0_18px_rgba(106,13,173,0.3)] ${className || ""}`}
        >
            {children}
        </div>
    );
};

export default BlurContainer;
