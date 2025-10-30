import { makeQuery } from "@api/queries/makeQuery.ts";
import { getMyAccountQueryOptions } from "@api/orval.ts";
import { mapAccountDTO } from "@domain/account/mapper.ts";

export const [useAccount, ensureAccount] = makeQuery(() =>
    getMyAccountQueryOptions({ query: { select: mapAccountDTO } }),
);
