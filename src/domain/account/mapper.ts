import type { AccountDTO } from "@api/orval.schemas.ts";
import type { Account } from "@domain/account/types.ts";

export const mapAccountDTO = (dto: AccountDTO): Account => ({
    id: dto.id ?? "",
    email: dto.email ?? "",
});
