import {
    type AccountProblemDetailErrorCode,
    AuthProblemDetailErrorCode,
    type CharacterProblemDetailErrorCode,
    type CombatProblemDetailErrorCode,
} from "@api/orval.schemas.ts";

export type ApiErrorCodes =
    | AccountProblemDetailErrorCode
    | AuthProblemDetailErrorCode
    | CharacterProblemDetailErrorCode
    | CombatProblemDetailErrorCode
    | OtherCodesWithoutProblemDetails;

type OtherCodesWithoutProblemDetails =
    (typeof OtherCodesWithoutProblemDetails)[keyof typeof OtherCodesWithoutProblemDetails];

const OtherCodesWithoutProblemDetails = {
    ERR_AUTH_UNAUTHORIZED: "ERR_AUTH_UNAUTHORIZED",
};
