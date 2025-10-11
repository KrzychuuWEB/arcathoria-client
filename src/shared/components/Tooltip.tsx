import * as React from "react";
import * as ReactTooltip from "@radix-ui/react-tooltip";

type TooltipProps = {
    children: React.ReactNode;
    title: string;
};

const Tooltip = ({ children, title }: TooltipProps) => {
    return (
        <ReactTooltip.Provider delayDuration={100}>
            <ReactTooltip.Root>
                <ReactTooltip.Trigger asChild>{children}</ReactTooltip.Trigger>
                <ReactTooltip.Content
                    side="bottom"
                    sideOffset={6}
                    className="z-50 px-3 py-1.5 rounded-xl text-sm font-roboto bg-[#2C1E40]/90 text-[#FFD700] border border-[#6A0DAD]/40 shadow-[0_0_12px_rgba(106,13,173,0.35)] backdrop-blur-md"
                >
                    {title}
                    <ReactTooltip.Arrow className="fill-[#2C1E40]/90" />
                </ReactTooltip.Content>
            </ReactTooltip.Root>
        </ReactTooltip.Provider>
    );
};

export default Tooltip;
