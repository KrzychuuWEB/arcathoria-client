import * as React from "react";

type ImageBackgroundProps = {
    src: string;
    children: React.ReactNode;
};

const ImageBackground = ({ src, children }: ImageBackgroundProps) => {
    return (
        <div
            className="relative min-h-dvh bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${src})` }}
        >
            {children}
        </div>
    );
};

export default ImageBackground;
