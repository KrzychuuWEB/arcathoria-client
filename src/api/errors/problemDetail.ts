import {
    type AccountProblemDetailContext,
    AccountProblemDetailErrorCode,
    type UpstreamInfo,
} from "@api/orval.schemas.ts";

export type ProblemDetail = {
    type?: string;
    title?: string;
    status?: number;
    detail?: string;
    instance?: string;
    readonly errorCode?: AccountProblemDetailErrorCode;
    context?: AccountProblemDetailContext;
    upstream?: UpstreamInfo;
};
