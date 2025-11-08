import {
    QueryClient,
    useQuery,
    type UseQueryOptions,
    type UseQueryResult,
} from "@tanstack/react-query";
import { useEffect } from "react";

type UseQExtra<TError> = {
    onError?: (error: TError) => void;
};

export function makeQuery<
    TQueryFnData,
    TError = unknown,
    TData = TQueryFnData,
    TKey extends readonly unknown[] = readonly unknown[],
>(
    factory: (opts?: {
        query?: Partial<UseQueryOptions<TQueryFnData, TError, TData, TKey>>;
    }) => UseQueryOptions<TQueryFnData, TError, TData, TKey>,
): readonly [
    (extra?: UseQExtra<TError>) => UseQueryResult<TData, TError>,
    (qc: QueryClient) => Promise<TData>,
];

export function makeQuery<
    TQueryFnData,
    TError = unknown,
    TData = TQueryFnData,
    TKey extends readonly unknown[] = readonly unknown[],
    P = unknown,
>(
    factory: (
        params: P,
        opts?: {
            query?: Partial<UseQueryOptions<TQueryFnData, TError, TData, TKey>>;
        },
    ) => UseQueryOptions<TQueryFnData, TError, TData, TKey>,
): readonly [
    (params: P, extra?: UseQExtra<TError>) => UseQueryResult<TData, TError>,
    (qc: QueryClient, params: P) => Promise<TData>,
];

export function makeQuery(factory: any) {
    const baseOptions = {
        query: {
            staleTime: 30_000,
            gcTime: 5 * 60_000,
            retry: 1,
        } as Partial<UseQueryOptions<any, any, any, any>>,
    };

    const useQ = (arg1?: any, arg2?: any) => {
        const hasParams = arg1 !== undefined && !(arg1?.onError || arg1?.message);
        const params = hasParams ? arg1 : undefined;
        const extra = hasParams ? arg2 : arg1;

        const options = hasParams ? factory(params, baseOptions) : factory(baseOptions);
        const q = useQuery(options);

        useEffect(() => {
            if (q.isError && q.error && extra?.onError) {
                extra.onError(q.error);
            }
        }, [q.isError, q.error, extra]);

        return q;
    };

    const ensureQ = (qc: QueryClient, arg1?: any) => {
        const hasParams = arg1 !== undefined;
        const options = hasParams ? factory(arg1, baseOptions) : factory(baseOptions);
        return qc.ensureQueryData(options);
    };

    return [useQ, ensureQ] as const;
}
