import * as React from "react";
import "./AccountContainer.css";

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

            <div className="relative w-full max-w-xl mx-auto p-10 rounded-2xl bg-black/30 backdrop-blur-md overflow-hidden z-10 border border-primary/40 shadow-[0_0_20px_rgba(106,13,173,0.35)]">
                <h2 className="text-sm text-center text-secondary italic mb-5 opacity-70">
                    {title}
                </h2>
                {children}
            </div>
        </div>
    );
};

export default AccountContainer;
