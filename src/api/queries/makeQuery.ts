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

export const makeQuery = <
    TQueryFnData,
    TError = unknown,
    TData = TQueryFnData,
    TKey extends readonly unknown[] = readonly unknown[],
>(
    factory: (opts?: {
        query?: Partial<UseQueryOptions<TQueryFnData, TError, TData, TKey>>;
    }) => UseQueryOptions<TQueryFnData, TError, TData, TKey>,
) => {
    const baseOptions = {
        query: {
            staleTime: 30_000,
            gcTime: 5 * 60_000,
            retry: 1,
        } as Partial<UseQueryOptions<TQueryFnData, TError, TData, TKey>>,
    };

    function useQ(extra?: UseQExtra<TError>): UseQueryResult<TData, TError> {
        const q = useQuery(factory(baseOptions));
        useEffect(() => {
            if (q.isError && q.error && extra?.onError) {
                extra.onError(q.error);
            }
        }, [q.isError, q.error, extra]);
        return q;
    }

    const ensureQ = (qc: QueryClient) => qc.ensureQueryData(factory(baseOptions));

    return [useQ, ensureQ] as const;
};
