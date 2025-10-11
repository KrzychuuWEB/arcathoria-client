import { LogOut, Mail, Menu, Settings, Users, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Tooltip from "@shared/components/Tooltip.tsx";
import { useState } from "react";
import { routes } from "@app/routes.ts";

type TopMenuProps = {
    email: string;
    characterCount: number;
    maxSlots?: number;
    onLogout: () => void;
    onOpenSettings: () => void;
};

export default function TopMenu({
    email,
    characterCount,
    maxSlots = 4,
    onLogout,
    onOpenSettings,
}: TopMenuProps) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const goToCharacters = () => {
        navigate(routes.character.list);
        setOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md">
            <div className="mx-auto w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 rounded-b-2xl border border-[#6A0DAD]/40 bg-[#1E1E2C]/60 shadow-[0_0_20px_rgba(106,13,173,0.35)] relative overflow-hidden">
                {/* glow tła */}
                <div className="pointer-events-none absolute inset-0 opacity-60">
                    <div className="absolute -inset-12 bg-gradient-to-r from-[#6A0DAD]/20 via-transparent to-[#FFD700]/20 blur-2xl" />
                </div>

                <nav className="relative z-10 hidden sm:grid grid-cols-3 items-center">
                    {/* lewo: e-mail */}
                    <div className="justify-self-start min-w-0 px-1">
                        <div
                            className="inline-flex max-w-full items-center gap-2 px-2.5 py-1.5 rounded-xl border border-[#6A0DAD]/40 bg-[#2C1E40]/40 text-[#F2F2F2] hover:bg-[#2C1E40]/60 transition"
                            title={email}
                        >
                            <Mail className="w-4 h-4 text-[#FFD700] shrink-0" />
                            <span className="text-sm font-roboto truncate block">{email}</span>
                        </div>
                    </div>

                    <div className="justify-self-center px-1">
                        <Tooltip title="Przejdź do listy postaci">
                            <div
                                onClick={goToCharacters}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6A0DAD]/40 bg-[#2C1E40]/40 text-[#F2F2F2] shadow-[0_0_10px_rgba(106,13,173,0.25)] hover:border-[#FFD700]/50 hover:text-[#FFD700] transition-all cursor-pointer select-none"
                                aria-label={`Postacie: ${characterCount}/${maxSlots}`}
                            >
                                <Users className="w-4 h-4 text-[#FFD700] cursor-pointer" />
                                <span className="text-sm font-roboto cursor-pointer">
                                    {characterCount}
                                    <span className="opacity-60">/{maxSlots}</span>
                                </span>
                            </div>
                        </Tooltip>
                    </div>

                    <div className="justify-self-end flex items-center gap-3 px-1">
                        <Tooltip title="Ustawienia konta">
                            <button
                                onClick={onOpenSettings}
                                className="cursor-pointer inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#6A0DAD]/25 border border-[#6A0DAD]/50 text-[#F2F2F2] hover:bg-[#6A0DAD]/35 hover:border-[#FFD700]/60 hover:text-[#FFD700] shadow-[0_0_10px_rgba(106,13,173,0.35)] transition"
                                aria-label="Ustawienia konta"
                            >
                                <Settings className="w-5 h-5" />
                            </button>
                        </Tooltip>

                        <Tooltip title="Wyloguj się">
                            <button
                                onClick={onLogout}
                                className="cursor-pointer inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#6A0DAD]/25 border border-[#6A0DAD]/50 text-[#F2F2F2] hover:bg-[#6A0DAD]/35 hover:border-[#FFD700]/60 hover:text-[#FFD700] shadow-[0_0_10px_rgba(106,13,173,0.35)] transition"
                                aria-label="Wyloguj"
                            >
                                <LogOut className="w-5 h-5" />
                            </button>
                        </Tooltip>
                    </div>
                </nav>

                <nav className="relative z-10 sm:hidden">
                    <div className="flex items-center justify-between">
                        {/* e-mail (truncate) */}
                        <div className="min-w-0">
                            <div className="inline-flex max-w-[62vw] items-center gap-2 px-2.5 py-1.5 rounded-xl border border-[#6A0DAD]/40 bg-[#2C1E40]/40 text-[#F2F2F2]">
                                <Mail className="w-4 h-4 text-[#FFD700] shrink-0" />
                                <span className="text-sm font-roboto truncate block">{email}</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setOpen((v) => !v)}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            className="cursor-pointer inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#6A0DAD]/25 border border-[#6A0DAD]/50 text-[#F2F2F2] hover:bg-[#6A0DAD]/35 hover:border-[#FFD700]/60 hover:text-[#FFD700] shadow-[0_0_10px_rgba(106,13,173,0.35)] transition"
                        >
                            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>

                    <div
                        id="mobile-menu"
                        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${open ? "max-h-[320px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}
                    >
                        <div className="flex flex-col gap-2">
                            <Tooltip title="Przejdź do listy postaci">
                                <div
                                    onClick={goToCharacters}
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6A0DAD]/40 bg-[#2C1E40]/40 text-[#F2F2F2] shadow-[0_0_10px_rgba(106,13,173,0.25)] hover:border-[#FFD700]/50 hover:text-[#FFD700] transition-all cursor-pointer w-auto self-start"
                                    aria-label={`Postacie: ${characterCount}/${maxSlots}`}
                                >
                                    <Users className="w-4 h-4 text-[#FFD700] cursor-pointer" />
                                    <span className="text-sm font-roboto cursor-pointer">
                                        {characterCount}
                                        <span className="opacity-60">/{maxSlots}</span>
                                    </span>
                                </div>
                            </Tooltip>

                            <div className="flex items-center gap-2">
                                <Tooltip title="Ustawienia konta">
                                    <button
                                        onClick={() => {
                                            onOpenSettings();
                                            setOpen(false);
                                        }}
                                        className="cursor-pointer inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6A0DAD]/25 border border-[#6A0DAD]/50 text-[#F2F2F2] hover:bg-[#6A0DAD]/35 hover:border-[#FFD700]/60 hover:text-[#FFD700] shadow-[0_0_10px_rgba(106,13,173,0.35)] transition"
                                        aria-label="Ustawienia konta"
                                    >
                                        <Settings className="w-5 h-5" />
                                    </button>
                                </Tooltip>

                                <Tooltip title="Wyloguj się">
                                    <button
                                        onClick={onLogout}
                                        className="cursor-pointer inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#6A0DAD]/25 border border-[#6A0DAD]/50 text-[#F2F2F2] hover:bg-[#6A0DAD]/35 hover:border-[#FFD700]/60 hover:text-[#FFD700] shadow-[0_0_10px_rgba(106,13,173,0.35)] transition"
                                        aria-label="Wyloguj"
                                    >
                                        <LogOut className="w-5 h-5" />
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
