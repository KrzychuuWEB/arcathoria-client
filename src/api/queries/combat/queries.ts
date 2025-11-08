import { makeQuery } from "@api/queries/makeQuery.ts";
import { mapCombatResultDTO } from "@domain/combat/mapper.ts";
import {
    getGetActiveCombatByParticipantIdQueryOptions,
    getGetCombatQueryOptions,
} from "@api/orval.ts";
import type { Combat } from "@domain/combat/types.ts";

export const [useCombatById] = makeQuery((id: string, opts?: { query?: any }) =>
    getGetCombatQueryOptions<Combat>(id, {
        ...opts,
        query: {
            select: mapCombatResultDTO,
            ...(opts?.query ?? {}),
        },
    }),
);

export const [useActiveCombat] = makeQuery(() =>
    getGetActiveCombatByParticipantIdQueryOptions({
        query: { select: (combat) => combat.combatId },
    }),
);
