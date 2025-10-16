import ImageBackground from "@shared/components/ImageBackground.tsx";
import { Link } from "react-router-dom";
import { routes } from "@app/routes.ts";

export const NotFoundPage = () => {
    return (
        <ImageBackground src="/notfound_bg.png">
            <div className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

                {/* Treść 404 */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 text-center">
                    <div className="inline-flex items-baseline justify-center gap-3">
                        <span
                            className="text-7xl md:text-8xl font-black tracking-tight text-text-light drop-shadow-[0_2px_12px_rgba(106,13,173,0.45)]"
                            style={{ fontFamily: "var(--font-heading)" }}
                        >
                            404
                        </span>
                        <span
                            className="hidden md:inline-block h-10 w-px bg-secondary/40"
                            aria-hidden
                        />
                        <span
                            className="hidden md:inline-block text-lg md:text-xl text-text-secondary"
                            style={{ fontFamily: "var(--font-body)" }}
                        >
                            Zgubiłeś się w zaklętym archiwum.
                        </span>
                    </div>

                    <p
                        className="max-w-xl text-balance text-base md:text-lg leading-relaxed text-text-secondary"
                        style={{ fontFamily: "var(--font-body)" }}
                    >
                        Strona, której szukasz, nie istnieje lub została przeniesiona. Wróć do
                        bezpiecznych korytarzy Akademii.
                    </p>

                    <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                        <Link
                            type="button"
                            className="group relative inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm md:text-base font-medium text-text-light shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-sm transition-colors duration-200 hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                            to={routes.account.base}
                        >
                            Powrót do Akademii
                        </Link>
                    </div>
                </div>
            </div>
        </ImageBackground>
    );
};
