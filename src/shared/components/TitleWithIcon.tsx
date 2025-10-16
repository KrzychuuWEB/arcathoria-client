import React from "react";

type TitleWithIconProps = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
};

export const TitleWithIcon: React.FC<TitleWithIconProps> = ({ icon: Icon, title }) => {
    return (
        <h4 className="font-cinzel text-text-light mb-3 flex items-center gap-2">
            <Icon className="w-5 h-5 text-secondary" />
            {title}
        </h4>
    );
};
