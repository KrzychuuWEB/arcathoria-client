import * as React from "react";
import "./AccountContainer.css";
import BlurContainer from "@shared/components/BlurContainer.tsx";

type AccountContainerProps = {
    children: React.ReactNode;
    title: string;
};

const AccountContainer = ({ children, title }: AccountContainerProps) => {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
            <img
                src="/magic_wand.png"
                alt="Magic wand"
                className="hidden md:block absolute top-[10%] left-[10%] w-40 h-40 object-contain animate-fly drop-shadow-glow pointer-events-none"
            />

            <BlurContainer className="relative w-full max-w-xl mx-auto p-10">
                <h2 className="text-sm text-center text-secondary italic mb-5 opacity-70">
                    {title}
                </h2>
                {children}
            </BlurContainer>
        </div>
    );
};

export default AccountContainer;
