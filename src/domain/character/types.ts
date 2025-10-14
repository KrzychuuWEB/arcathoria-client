export type Resource = {
    value: number;
    max: number;
};

export type Character = {
    id: string;
    name: string;
    avatarUrl: string;
    level: number;
    hp: Resource;
    mana: Resource;
};
