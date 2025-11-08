import { cn } from "@shared/libs/cn";

type TimerRingProps = {
    progress: number;
    size?: number;
    stroke?: number;
    colorClass?: string;
    trackClassName?: string;
    active?: boolean;
    className?: string;
};

export function TimerRing({
    progress,
    size = 80,
    stroke = 4,
    colorClass = "text-secondary",
    trackClassName = "text-primary/30",
    active = false,
    className,
}: TimerRingProps) {
    const clamped = Math.max(0, Math.min(1, progress));
    const r = (size - stroke) / 2;
    const c = 2 * Math.PI * r;
    const dashOffset = c * (1 - clamped);

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className={cn("pointer-events-none", className)}
            aria-hidden
        >
            <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                className={trackClassName}
                fill="none"
                stroke="currentColor"
                strokeWidth={stroke}
                opacity={0.35}
            />
            <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                className={cn(colorClass, active && "drop-shadow-[0_0_8px_rgba(255,215,0,0.35)]")}
                fill="none"
                stroke="currentColor"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={c}
                strokeDashoffset={dashOffset}
                style={{
                    transition: "stroke-dashoffset 120ms linear",
                    transform: `rotate(-90deg)`,
                    transformOrigin: "50% 50%",
                }}
            />
            {active && (
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={r}
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth={1.5}
                    opacity={0.55}
                    className="animate-pulse"
                />
            )}
        </svg>
    );
}
