import {
    type AccountProblemDetailErrorCode,
    AuthProblemDetailErrorCode,
    type CharacterProblemDetailErrorCode,
} from "@api/orval.schemas.ts";

export type ApiErrorCodes =
    | AccountProblemDetailErrorCode
    | AuthProblemDetailErrorCode
    | CharacterProblemDetailErrorCode;
