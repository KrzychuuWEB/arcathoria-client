import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@shared/libs/query.ts";
import { AppRouter } from "@app/Router.tsx";
import { ToastProvider } from "@shared/libs/toastify/ToastProvider.tsx";

export const Providers = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <AppRouter />
            <ToastProvider />
        </QueryClientProvider>
    );
};
