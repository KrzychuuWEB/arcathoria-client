import { useCallback, useEffect, useRef } from "react";
import NProgress from "@shared/libs/nprogress";

type UseNProgressOptions = {
    startOnMount?: boolean;
    doneOnUnmount?: boolean;
};

export function useNProgress(options?: UseNProgressOptions) {
    const isActive = useRef(false);

    const start = useCallback(() => {
        if (!isActive.current) {
            NProgress.start();
            isActive.current = true;
        }
    }, []);

    const done = useCallback(() => {
        if (isActive.current) {
            NProgress.done();
            isActive.current = false;
        }
    }, []);

    const inc = useCallback((amount?: number) => {
        NProgress.inc(amount);
    }, []);

    useEffect(() => {
        if (options?.startOnMount) start();
        return () => {
            if (options?.doneOnUnmount) done();
        };
    }, [options?.startOnMount, options?.doneOnUnmount, start, done]);

    return { start, done, inc };
}
