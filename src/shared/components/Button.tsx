import * as React from "react";

type ButtonProps = {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    loading?: boolean;
};

const Button = ({
    children,
    icon,
    className = "",
    onClick,
    type = "button",
    disabled = false,
    loading = false,
}: ButtonProps) => {
    const baseClasses = `
        inline-flex items-center justify-center gap-2
        w-full py-3 px-6 rounded-md text-base font-roboto
        bg-primary-dark text-text-light
        border border-transparent
        hover:bg-primary/50
        active:bg-primary/70
        transition-colors duration-150
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
    `;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={`${baseClasses} ${className}`}
        >
            {loading ? (
                <span className="inline-block w-5 h-5 border-3 border-t-transparent border-secondary rounded-full animate-spin" />
            ) : (
                <>
                    {icon && <span className="text-base text-secondary">{icon}</span>}
                    <span>{children}</span>
                </>
            )}
        </button>
    );
};

export default Button;
