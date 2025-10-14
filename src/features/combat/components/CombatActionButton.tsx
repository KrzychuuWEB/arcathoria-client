import Tooltip from "@shared/components/Tooltip.tsx";
import { type LucideIcon } from "lucide-react";
import { cn } from "@shared/libs/cn.ts";

type CombatActionButtonProps = {
    title: string;
    disabled?: boolean;
    icon: LucideIcon;
    color?: string;
    onClick: () => void;
};

export const CombatActionButton = ({
    title,
    disabled,
    icon: Icon,
    color,
    onClick,
}: CombatActionButtonProps) => {
    return (
        <Tooltip title={title}>
            <button
                onClick={onClick}
                disabled={disabled}
                className="cursor-pointer bg-primary-dark/40 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-primary/40 bg-primary-dark/40 text-text-light transition hover:border-secondary/60 hover:text-secondary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-primary/40 disabled:hover:text-text-light"
            >
                <Icon className={cn("w-5 h-5", color)} />
            </button>
        </Tooltip>
    );
};
