import type { CombatResultDTO, ParticipantDTO } from "@api/orval.schemas.ts";
import type { Combat, Participant } from "@domain/combat/types.ts";

export const mapCombatResultDTO = (dto: CombatResultDTO): Combat => ({
    id: dto.combatId || "",
    attacker: mapParticipantDTO(dto.attacker),
    defender: mapParticipantDTO(dto.defender),
    combatSide: dto.combatSide || "ATTACKER",
    status: dto.status ?? "IN_PROGRESS",
});

const mapParticipantDTO = (dto?: ParticipantDTO): Participant => ({
    id: dto?.id ?? "",
    health: {
        value: dto?.currentHp ?? 0,
        max: dto?.maxHp ?? 0,
    },
});
