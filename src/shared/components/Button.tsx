import * as React from "react";

type ButtonProps = {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
};

const Button = ({
    children,
    icon,
    className = "",
    onClick,
    type = "button",
    disabled = false,
}: ButtonProps) => {
    const baseClasses = `
        inline-flex items-center justify-center gap-2
        w-full py-3 px-6 rounded-md text-base font-roboto
        bg-[#32224f] text-white
        border border-transparent
        hover:bg-[#3b2a5e]
        active:bg-[#2b1a45]
        transition-colors duration-150
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
    `;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClasses} ${className}`}
        >
            {icon && <span className="text-base">{icon}</span>}
            <span>{children}</span>
        </button>
    );
};

export default Button;
