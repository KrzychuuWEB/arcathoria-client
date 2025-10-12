import { type JSX, useEffect, useMemo, useState } from "react";
import {
    Brain,
    Droplet,
    Flame,
    Heart,
    Moon,
    Shield,
    ShieldCheck,
    Skull,
    Sparkles,
    Sun,
    Swords,
    Timer,
    Wand2,
    Wind,
} from "lucide-react";
import Tooltip from "@shared/components/Tooltip";

type Entity = {
    id: string;
    name: string;
    avatar: string;
    level: number;
    hp: number;
    hpMax: number;
    mp: number;
    mpMax: number;
    status?: { label: string; kind: "buff" | "debuff" }[];
};

type Spell = {
    id: string;
    name: string;
    icon: JSX.Element;
    cost: number;
    type: "fire" | "water" | "air" | "light" | "dark" | "arcane";
    cd?: number;
};

type LogItem = {
    text: string;
    tone: "info" | "damage" | "heal";
};

const StatBar = ({
    value,
    max,
    color,
    label,
}: {
    value: number;
    max: number;
    color: string;
    label: string;
}) => {
    const width = Math.max(0, Math.min(100, (value / max) * 100));
    return (
        <div className="space-y-1">
            <div className="flex items-center justify-between text-xs text-text-secondary">
                <span>{label}</span>
                <span className="tabular-nums">
                    {value}/{max}
                </span>
            </div>
            <div className="h-3 rounded-full bg-black/40 border border-primary/30 overflow-hidden">
                <div className={`h-full ${color}`} style={{ width: `${width}%` }} />
            </div>
        </div>
    );
};

const StatusPill = ({ text, kind }: { text: string; kind: "buff" | "debuff" }) => (
    <span
        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${
            kind === "buff"
                ? "border-secondary/40 text-secondary bg-primary/10"
                : "border-complementary-red/40 text-complementary-red bg-complementary-red/10"
        }`}
    >
        {kind === "buff" ? <ShieldCheck className="w-3 h-3" /> : <Skull className="w-3 h-3" />}
        {text}
    </span>
);

function DamageFloater({ value, positive = false }: { value: number; positive?: boolean }) {
    const [show, setShow] = useState(true);
    useEffect(() => {
        const t = setTimeout(() => setShow(false), 900);
        return () => clearTimeout(t);
    }, []);
    if (!show) return null;
    return (
        <span
            className={`absolute -top-2 left-1/2 -translate-x-1/2 text-sm font-cinzel ${
                positive ? "text-secondary" : "text-complementary-red"
            } drop-shadow`}
            style={{ animation: "arc-rise .9s ease-out forwards" }}
        >
            {positive ? `+${value}` : `-${value}`}
        </span>
    );
}

const CombatPage = () => {
    const [player, setPlayer] = useState<Entity>({
        id: "p1",
        name: "Elyndra",
        avatar: "/default_avatar.png",
        level: 27,
        hp: 180,
        hpMax: 220,
        mp: 95,
        mpMax: 120,
        status: [{ label: "Bariera Runiczna", kind: "buff" }],
    });

    const [enemy, setEnemy] = useState<Entity>({
        id: "e1",
        name: "Wojownik Pustki",
        avatar: "/default_avatar.png",
        level: 29,
        hp: 210,
        hpMax: 210,
        mp: 60,
        mpMax: 80,
        status: [{ label: "Korozja", kind: "debuff" }],
    });

    const [log, setLog] = useState<LogItem[]>([
        { text: "Rozpoczyna się starcie...", tone: "info" },
        { text: "Elyndra wzmacnia się: Bariera Runiczna.", tone: "info" },
    ]);
    const [turn, setTurn] = useState<"player" | "enemy">("player");
    const [busy, setBusy] = useState(false);
    const [turnTime, setTurnTime] = useState(100);
    const [lastDamageEnemy, setLastDamageEnemy] = useState<number | null>(null);
    const [lastDamagePlayer, setLastDamagePlayer] = useState<number | null>(null);
    const [cooldowns, setCooldowns] = useState<Record<string, number>>({});

    const turnOrder = useMemo(
        () => [
            { id: player.id, name: player.name, you: true },
            { id: enemy.id, name: enemy.name, you: false },
        ],
        [player.id, player.name, enemy.id, enemy.name],
    );

    const spells: Spell[] = [
        {
            id: "s1",
            name: "Ignis Bolt",
            icon: <Flame className="w-5 h-5" />,
            cost: 12,
            type: "fire",
            cd: 2,
        },
        {
            id: "s2",
            name: "Aqua Veil",
            icon: <Droplet className="w-5 h-5" />,
            cost: 10,
            type: "water",
        },
        { id: "s3", name: "Aeris Slash", icon: <Wind className="w-5 h-5" />, cost: 8, type: "air" },
        {
            id: "s4",
            name: "Lux Flare",
            icon: <Sun className="w-5 h-5" />,
            cost: 15,
            type: "light",
            cd: 3,
        },
        {
            id: "s5",
            name: "Umbra Mark",
            icon: <Moon className="w-5 h-5" />,
            cost: 14,
            type: "dark",
        },
        {
            id: "s6",
            name: "Arcane Nova",
            icon: <Sparkles className="w-5 h-5" />,
            cost: 20,
            type: "arcane",
            cd: 4,
        },
    ];

    const isOnCd = (s: Spell) => (cooldowns[s.id] ?? 0) > 0;

    useEffect(() => {
        if (turn !== "player" || busy) return;
        setTurnTime(100);
        const id = setInterval(() => setTurnTime((t) => Math.max(0, t - 1)), 100);
        return () => clearInterval(id);
    }, [turn, busy]);

    useEffect(() => {
        if (turn === "player" && turnTime === 0) {
            setLog((l) => [{ text: "Czas minął — tura przepada.", tone: "info" }, ...l]);
            setTurn("enemy");
        }
    }, [turnTime, turn]);

    useEffect(() => {
        if (turn !== "player") return;
        setCooldowns((cd) =>
            Object.fromEntries(Object.entries(cd).map(([k, v]) => [k, Math.max(0, v - 1)])),
        );
    }, [turn]);

    const enemyTurn = () => {
        setBusy(true);
        setLog((l) => [{ text: `${enemy.name} szykuje atak...`, tone: "info" }, ...l]);
        setTimeout(() => {
            const dmg = Math.round(9 + Math.random() * 12);
            setPlayer((p) => ({ ...p, hp: Math.max(0, p.hp - dmg) }));
            setLastDamagePlayer(dmg);
            setLog((l) => [{ text: `${enemy.name} zadaje ${dmg} obrażeń.`, tone: "damage" }, ...l]);
            setTurn("player");
            setBusy(false);
            setTimeout(() => setLastDamagePlayer(null), 900);
        }, 700);
    };

    const cast = (s: Spell) => {
        if (turn !== "player" || busy) return;
        if (isOnCd(s)) return;
        if (player.mp < s.cost) {
            setLog((l) => [{ text: `Brak many na ${s.name}.`, tone: "info" }, ...l]);
            return;
        }
        setBusy(true);
        setPlayer((p) => ({ ...p, mp: Math.max(0, p.mp - s.cost) }));
        setLog((l) => [{ text: `Elyndra rzuca ${s.name}.`, tone: "info" }, ...l]);
        if (s.cd && s.cd > 0) setCooldowns((cd) => ({ ...cd, [s.id]: s.cd! }));

        setTimeout(() => {
            const dmg = Math.round(18 + Math.random() * 14);
            setEnemy((e) => ({ ...e, hp: Math.max(0, e.hp - dmg) }));
            setLastDamageEnemy(dmg);
            setLog((l) => [
                { text: `${enemy.name} otrzymuje obrażenia (${dmg}).`, tone: "damage" },
                ...l,
            ]);
            setTurn("enemy");
            setBusy(false);
            setTimeout(() => setLastDamageEnemy(null), 900);
            setTimeout(enemyTurn, 700);
        }, 500);
    };

    const basicAttack = () => {
        if (turn !== "player" || busy) return;
        setBusy(true);
        setLog((l) => [{ text: "Elyndra atakuje.", tone: "info" }, ...l]);
        setTimeout(() => {
            const dmg = Math.round(10 + Math.random() * 8);
            setEnemy((e) => ({ ...e, hp: Math.max(0, e.hp - dmg) }));
            setLastDamageEnemy(dmg);
            setTurn("enemy");
            setBusy(false);
            setLog((l) => [
                { text: `${enemy.name} otrzymuje obrażenia (${dmg}).`, tone: "damage" },
                ...l,
            ]);
            setTimeout(() => setLastDamageEnemy(null), 900);
            setTimeout(enemyTurn, 700);
        }, 400);
    };

    const defend = () => {
        if (turn !== "player" || busy) return;
        setBusy(true);
        setLog((l) => [{ text: "Elyndra przyjmuje postawę obronną.", tone: "info" }, ...l]);
        setPlayer((p) => ({
            ...p,
            status: [...(p.status || []), { label: "Osłona", kind: "buff" }],
        }));
        setTurn("enemy");
        setTimeout(() => {
            setBusy(false);
            enemyTurn();
        }, 400);
    };

    const healSelf = (amount: number) => {
        if (turn !== "player" || busy) return;
        setBusy(true);
        const healed = Math.min(amount, player.hpMax - player.hp);
        setPlayer((p) => ({ ...p, hp: Math.min(p.hpMax, p.hp + amount) }));
        setLastDamagePlayer(healed);
        setLog((l) => [{ text: `Elyndra leczy się o ${healed}.`, tone: "heal" }, ...l]);
        setTurn("enemy");
        setBusy(false);
        setTimeout(() => setLastDamagePlayer(null), 900);
        setTimeout(enemyTurn, 700);
    };

    const canAct = turn === "player" && !busy;

    return (
        <div className="mt-20 flex items-start lg:items-center justify-center px-4 sm:px-6 py-6">
            <div className="w-full max-w-6xl grid gap-6 lg:grid-cols-[1fr_360px]">
                <section className="space-y-4">
                    <div className="rounded-2xl border border-primary/40 bg-black/60 backdrop-blur-md p-4 sm:p-6 shadow-[0_0_18px_rgba(106,13,173,0.3)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                                    <img
                                        src={player.avatar}
                                        alt={player.name}
                                        className="w-full h-full rounded-full border border-primary/40 object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 opacity-60 blur-md" />
                                    {lastDamagePlayer !== null && (
                                        <DamageFloater value={lastDamagePlayer} positive={false} />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-cinzel text-text-light text-lg truncate">
                                        {player.name}{" "}
                                        <span className="text-text-secondary">
                                            Lv. {player.level}
                                        </span>
                                    </h3>
                                    <div className="mt-2 space-y-2">
                                        <StatBar
                                            value={player.hp}
                                            max={player.hpMax}
                                            color="bg-complementary-green"
                                            label="Zdrowie"
                                        />
                                        <StatBar
                                            value={player.mp}
                                            max={player.mpMax}
                                            color="bg-primary"
                                            label="Mana"
                                        />
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {(player.status || []).map((s, i) => (
                                            <StatusPill key={i} text={s.label} kind={s.kind} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 md:justify-end">
                                <div className="flex-1 md:flex-none md:order-2">
                                    <h3 className="font-cinzel text-text-light text-lg truncate text-right">
                                        {enemy.name}{" "}
                                        <span className="text-text-secondary">
                                            Lv. {enemy.level}
                                        </span>
                                    </h3>
                                    <div className="mt-2 space-y-2">
                                        <StatBar
                                            value={enemy.hp}
                                            max={enemy.hpMax}
                                            color="bg-complementary-green"
                                            label="Zdrowie"
                                        />
                                        <StatBar
                                            value={enemy.mp}
                                            max={enemy.mpMax}
                                            color="bg-primary"
                                            label="Mana"
                                        />
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-2 justify-end">
                                        {(enemy.status || []).map((s, i) => (
                                            <StatusPill key={i} text={s.label} kind={s.kind} />
                                        ))}
                                    </div>
                                </div>
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20 order-1">
                                    <img
                                        src={enemy.avatar}
                                        alt={enemy.name}
                                        className="w-full h-full rounded-full border border-primary/40 object-cover"
                                    />
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 opacity-60 blur-md" />
                                    {lastDamageEnemy !== null && (
                                        <DamageFloater value={lastDamageEnemy} positive={false} />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-primary/40 bg-black/60 backdrop-blur-md p-3 sm:p-4 shadow-[0_0_18px_rgba(106,13,173,0.3)] space-y-3">
                        <div className="flex items-center gap-2 overflow-x-auto">
                            {turnOrder.map((t, i) => (
                                <div
                                    key={t.id}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${
                                        i === 0
                                            ? "border-secondary/50 text-secondary"
                                            : "border-primary/40 text-text-secondary"
                                    } bg-primary-dark/40`}
                                >
                                    <Timer className="w-4 h-4" />
                                    <span className="text-sm">{t.you ? "Ty" : t.name}</span>
                                </div>
                            ))}
                        </div>
                        <div className="h-2 rounded-full bg-black/50 border border-primary/30 overflow-hidden">
                            <div
                                className="h-full bg-secondary"
                                style={{ width: `${turnTime}%` }}
                            />
                        </div>
                    </div>

                    <div className="rounded-2xl border border-primary/40 bg-black/60 backdrop-blur-md p-4 shadow-[0_0_18px_rgba(106,13,173,0.3)]">
                        <h4 className="font-cinzel text-text-light mb-3">Zaklęcia</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {spells.map((s) => {
                                const cdLeft = cooldowns[s.id] ?? 0;
                                const disabled = !canAct || player.mp < s.cost || cdLeft > 0;
                                return (
                                    <div key={s.id} className="relative">
                                        <Tooltip
                                            title={`${s.name} • ${s.cost} MP${s.cd ? ` • CD ${s.cd}` : ""}`}
                                        >
                                            <button
                                                onClick={() => cast(s)}
                                                disabled={disabled}
                                                className="cursor-pointer group flex flex-col items-center justify-center gap-2 p-3 rounded-xl border border-primary/40 bg-black/40 text-text-light hover:border-secondary/60 hover:text-secondary hover:bg-primary-dark/60 disabled:opacity-50 disabled:cursor-not-allowed transition w-full"
                                            >
                                                <span className="grid place-content-center w-10 h-10 rounded-lg bg-primary/15 border border-primary/40 text-secondary">
                                                    {s.icon}
                                                </span>
                                                <span className="text-xs font-roboto">
                                                    {s.name}
                                                </span>
                                                <span className="text-[10px] text-text-secondary">
                                                    {s.cost} MP
                                                </span>
                                            </button>
                                        </Tooltip>
                                        {cdLeft > 0 && (
                                            <div className="absolute inset-0 grid place-content-center rounded-xl bg-black/60 text-text-light text-sm font-cinzel border border-primary/40">
                                                {cdLeft}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-primary/40 bg-black/60 backdrop-blur-md p-3 sm:p-4 shadow-[0_0_18px_rgba(106,13,173,0.3)]">
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            <Tooltip title="Atak podstawowy (A)">
                                <button
                                    onClick={basicAttack}
                                    disabled={!canAct}
                                    className="cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-primary/40 bg-primary-dark/40 text-text-light hover:border-secondary/60 hover:text-secondary transition disabled:opacity-50"
                                >
                                    <Swords className="w-5 h-5" />
                                    <span className="text-sm hidden xs:inline">Atak</span>
                                </button>
                            </Tooltip>
                            <Tooltip title="Obrona / Osłona (D)">
                                <button
                                    onClick={defend}
                                    disabled={!canAct}
                                    className="cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-primary/40 bg-primary-dark/40 text-text-light hover:border-secondary/60 hover:text-secondary transition disabled:opacity-50"
                                >
                                    <Shield className="w-5 h-5" />
                                    <span className="text-sm hidden xs:inline">Obrona</span>
                                </button>
                            </Tooltip>
                            <Tooltip title="Leczenie">
                                <button
                                    onClick={() => healSelf(16)}
                                    disabled={!canAct}
                                    className="cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-primary/40 bg-primary-dark/40 text-text-light hover:border-secondary/60 hover:text-secondary transition disabled:opacity-50"
                                >
                                    <Heart className="w-5 h-5" />
                                    <span className="text-sm hidden xs:inline">Ulecz</span>
                                </button>
                            </Tooltip>
                        </div>
                    </div>
                </section>

                <aside className="rounded-2xl border border-primary/40 bg-black/60 backdrop-blur-md p-4 sm:p-5 shadow-[0_0_18px_rgba(106,13,173,0.3)]">
                    <h4 className="font-cinzel text-text-light mb-3 flex items-center gap-2">
                        <Wand2 className="text-secondary" /> Dziennik Walki
                    </h4>
                    <div className="space-y-2 max-h-[420px] overflow-auto pr-1">
                        {log.map((item, i) => (
                            <div
                                key={i}
                                className={`text-sm ${
                                    item.tone === "damage"
                                        ? "text-complementary-red"
                                        : item.tone === "heal"
                                          ? "text-complementary-green"
                                          : "text-text-secondary"
                                }`}
                            >
                                {item.text}
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-2 text-xs text-text-secondary">
                        <div className="inline-flex items-center gap-2 px-2 py-2 rounded-xl border border-primary/40 bg-primary-dark/40">
                            <Heart className="w-4 h-4 text-secondary" />
                            {player.hp}/{player.hpMax}
                        </div>
                        <div className="inline-flex items-center gap-2 px-2 py-2 rounded-xl border border-primary/40 bg-primary-dark/40">
                            <Brain className="w-4 h-4 text-secondary" />
                            {player.mp}/{player.mpMax}
                        </div>
                        <div className="inline-flex items-center gap-2 px-2 py-2 rounded-xl border border-primary/40 bg-primary-dark/40">
                            <Shield className="w-4 h-4 text-secondary" />
                            {player.status?.length || 0} buff
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default CombatPage;
