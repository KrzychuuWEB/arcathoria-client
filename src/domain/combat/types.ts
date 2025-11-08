export type Resource = {
    value: number;
    max: number;
};

export type Participant = {
    id: string;
    health: Resource;
};

export type Combat = {
    id: string;
    attacker: Participant;
    defender: Participant;
    combatSide: CombatSideType;
    status: CombatStatusType;
};

export type CombatSideType = "ATTACKER" | "DEFENDER";

export type CombatStatusType = "IN_PROGRESS" | "FINISHED" | "CANCELLED";
