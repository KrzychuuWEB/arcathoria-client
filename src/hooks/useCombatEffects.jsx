import { useState } from "react";

export const useCombatEffects = () => {
    const [isHit, setIsHit] = useState(false);
    const [effects, setEffects] = useState([]);

    const triggerEffects = (effectsArray) => {
        setIsHit(true);
        setEffects(effectsArray);
    };

    const onHitEnd = () => {
        setIsHit(false);
        setEffects([]);
    };

    return {
        isHit,
        effects,
        triggerEffects,
        onHitEnd,
    };
};
