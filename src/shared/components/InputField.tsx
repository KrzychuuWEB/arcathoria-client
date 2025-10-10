import * as React from "react";
import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type InputFieldProps = {
    label?: string;
    type?: "text" | "email" | "password";
    name: string;
    placeholder?: string;
    icon?: React.ReactNode;
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, type = "text", name, placeholder, icon, error, ...rest }, ref) => {
        const [showPassword, setShowPassword] = useState(false);
        const isPassword = type === "password";

        const inputBaseClasses =
            "w-full p-3 rounded bg-[#2e2e40] text-white placeholder-gray-400 focus:outline-none focus:ring-2";
        const inputPadding = `${icon ? "pl-12" : "pl-3"} ${isPassword ? "pr-10" : "pr-3"}`;
        const inputBorder = error
            ? "border border-red-500 focus:ring-red-500"
            : "border border-purple-700 focus:ring-purple-500";

        return (
            <div className="space-y-1">
                {label && (
                    <label htmlFor={name} className="text-sm text-gray-300">
                        {label}
                    </label>
                )}
                <div className="relative">
                    {icon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500">
                            {icon}
                        </div>
                    )}
                    <input
                        id={name}
                        name={name}
                        ref={ref}
                        type={isPassword && showPassword ? "text" : type}
                        placeholder={placeholder}
                        className={`${inputBaseClasses} ${inputPadding} ${inputBorder}`}
                        {...rest}
                    />
                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    )}
                </div>
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
        );
    },
);

InputField.displayName = "InputField";
export default InputField;
