import { useCallback, useState } from "react";
import type { EffectItem } from "@shared/components/floatingEffect/FloatingEffect.tsx";

export function useFloatingEffects() {
    const [effects, setEffects] = useState<EffectItem[]>([]);

    const addEffect = useCallback((effect: EffectItem) => {
        setEffects((effects) => [effect, ...effects]);
    }, []);

    const clearEffects = useCallback(() => setEffects([]), []);

    return { effects, addEffect, clearEffects };
}
