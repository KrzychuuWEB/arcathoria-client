import type { Combat, CombatSideType, Participant } from "@/domain/combat/types";

export type Perspective = {
    player: Participant;
    enemy: Participant;
    playerSide: CombatSideType;
    enemySide: CombatSideType;
};

export function getPerspective(combat: Combat, playerId: string): Perspective {
    const playerIsAttacker = combat.attacker.id === playerId;
    return {
        player: playerIsAttacker ? combat.attacker : combat.defender,
        enemy: playerIsAttacker ? combat.defender : combat.attacker,
        playerSide: playerIsAttacker ? "ATTACKER" : "DEFENDER",
        enemySide: playerIsAttacker ? "DEFENDER" : "ATTACKER",
    };
}
