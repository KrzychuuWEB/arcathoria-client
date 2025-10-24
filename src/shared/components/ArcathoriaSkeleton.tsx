import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type ArcathoriaSkeletonProps = {
    variant?: "block" | "text" | "avatar";
    width?: number | string;
    height?: number | string;
    radius?: number;
    lines?: number;
    fitParent?: boolean;
    className?: string;
};

export function ArcathoriaSkeleton({
    variant = "block",
    width,
    height = 16,
    radius = 12,
    lines = 3,
    fitParent,
    className,
}: ArcathoriaSkeletonProps) {
    const baseColor = getCssVar("--color-primary-600", "#4a007a");
    const highlightColor = getCssVar("--color-primary-300", "#9b59b6");

    if (variant === "text") {
        const arr = Array.from({ length: Math.max(1, lines) });
        return (
            <div className={className}>
                {arr.map((_, i) => (
                    <Skeleton
                        key={i}
                        height={height}
                        width={
                            fitParent
                                ? "100%"
                                : i === arr.length - 1
                                  ? typeof width === "number"
                                      ? width
                                      : (width ?? "66%")
                                  : (width ?? "100%")
                        }
                        borderRadius={8}
                        baseColor={baseColor}
                        highlightColor={highlightColor}
                        style={{
                            display: "block",
                            marginBottom: i === arr.length - 1 ? 0 : 8,
                        }}
                        enableAnimation
                    />
                ))}
            </div>
        );
    }

    if (variant === "avatar") {
        const size = typeof width !== "undefined" ? width : (height ?? 48);
        return (
            <Skeleton
                height={size as number | string}
                width={size as number | string}
                borderRadius={999}
                className={className}
                baseColor={baseColor}
                highlightColor={highlightColor}
                enableAnimation
            />
        );
    }

    return (
        <Skeleton
            className={className}
            height={height}
            width={fitParent ? "100%" : width}
            borderRadius={radius}
            baseColor={baseColor}
            highlightColor={highlightColor}
            enableAnimation
        />
    );
}

function getCssVar(name: string, fallback: string) {
    if (typeof window === "undefined") return fallback;
    const val = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return val || fallback;
}
