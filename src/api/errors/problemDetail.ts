import { type AccountProblemDetailContext, type UpstreamInfo } from "@api/orval.schemas.ts";
import type { ApiErrorCodes } from "@api/errors/apiErrorCodes.ts";

export type ProblemDetail = {
    type?: string;
    title?: string;
    status?: number;
    detail?: string;
    instance?: string;
    readonly errorCode?: ApiErrorCodes;
    context?: AccountProblemDetailContext;
    upstream?: UpstreamInfo;
};
