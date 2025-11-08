import { useState } from "react";
import BlurContainer from "@shared/components/BlurContainer";
import Tooltip from "@shared/components/Tooltip";
import { Info, Map, ScrollText } from "lucide-react";
import { TitleWithIcon } from "@shared/components/TitleWithIcon.tsx";
import Button from "@shared/components/Button.tsx";
import { ExpeditionCard } from "@features/expedition/components/ExpeditionCard.tsx";
import { useNavigate } from "react-router-dom";
import { routes } from "@app/routes.ts";
import { useApiErrorHandler } from "@api/errors/useApiErrorHandler.ts";
import { useInitPveCombat } from "@api/orval.ts";
import type { InitPveDTO } from "@api/orval.schemas.ts";
import { setActiveCombatSession } from "@app/guard/query.ts";

export type BiomeKey = "vulcan" | "mountain" | "ruins" | "forest";

export type Biome = {
    key: BiomeKey;
    name: string;
    icon: string;
};

const BIOMES: Biome[] = [
    { key: "forest", name: "Las", icon: "forest.png" },
    { key: "ruins", name: "Ruiny", icon: "ruins.png" },
    { key: "vulcan", name: "Wulkan", icon: "vulcan.png" },
    { key: "mountain", name: "Góry", icon: "mountain.png" },
];

const ChooseExpeditionPage = () => {
    const [selected, setSelected] = useState<BiomeKey | null>(null);
    const navigate = useNavigate();
    const handleApiError = () => useApiErrorHandler();

    const initCombatMutation = useInitPveCombat({
        mutation: {
            onSuccess: (data) => {
                setActiveCombatSession(data.combatId || "");
                navigate(routes.combat.byId(data.combatId || ""));
            },
            onError: handleApiError,
        },
    });

    const startExpedition = () => {
        const payload: InitPveDTO = {
            monsterId: "bf4397d8-b4dc-361e-9b6d-191a352e9134",
        };

        initCombatMutation.mutate({ data: payload });
    };

    const isLoading = initCombatMutation.isPending;

    return (
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
            <section className="space-y-4">
                <BlurContainer>
                    <div className="flex items-center justify-between mb-4">
                        <TitleWithIcon icon={Map} title="Wybór ekspedycji" />

                        <Tooltip title="Wybierz cel wyprawy. Pozostałe szczegóły dodamy później.">
                            <Info className="w-5 h-5 text-secondary" />
                        </Tooltip>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                        {BIOMES.map((b) => (
                            <ExpeditionCard
                                key={b.key}
                                b={b}
                                selected={selected === b.key}
                                onSelect={() => setSelected(b.key)}
                            />
                        ))}
                    </div>
                </BlurContainer>

                <BlurContainer>
                    <div className="text-text-secondary text-sm">
                        Tutaj pojawią się szczegóły ekspedycji (czas, drużyna, nagrody...). Na razie
                        to tylko szkielet.
                    </div>
                </BlurContainer>
            </section>

            <aside className="space-y-4">
                <BlurContainer>
                    <TitleWithIcon icon={ScrollText} title="Podsumowanie" />
                    <ul className="space-y-2 text-sm">
                        <li className="flex justify-between gap-3">
                            <span className="text-text-secondary">Lokacja</span>
                            <span className="text-text-light">
                                {selected ? BIOMES.find((x) => x.key === selected)?.name : "—"}
                            </span>
                        </li>
                    </ul>

                    <div className="h-px bg-primary/30 my-4" />

                    <div>
                        <Button onClick={startExpedition} disabled={!selected || isLoading}>
                            Rozpocznij
                        </Button>
                    </div>
                </BlurContainer>
            </aside>
        </div>
    );
};

export default ChooseExpeditionPage;
