import { useNProgress } from "@shared/hooks/useNProgress.ts";

export function ProgressFallback() {
    useNProgress({ startOnMount: true, doneOnUnmount: true });
    return null;
}
