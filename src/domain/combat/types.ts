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
    combatSide: "ATTACKER" | "DEFENDER";
    status: "IS_PROGRESS" | "FINISHED";
};
