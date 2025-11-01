export type Character = {
    id: string;
    avatar_url: string;
    name: string;
    hp: number;
    intelligence: number;
    level: number;
};
export const MAX_SLOTS = 4;

export type Attributes = "strength" | "agility" | "intellect" | "vitality" | "spirit";

export const BASE_ATTRIBUTE_COST: Record<Attributes, number> = {
    strength: 40,
    agility: 40,
    intellect: 60,
    vitality: 50,
    spirit: 45,
};
