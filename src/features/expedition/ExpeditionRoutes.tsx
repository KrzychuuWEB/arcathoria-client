import type { RouteObject } from "react-router-dom";
import { routes } from "@app/routes.ts";
import * as React from "react";
import { lazy, Suspense } from "react";
import { ProgressFallback } from "@shared/components/ProgressFallback.tsx";
import ExpeditionLayout from "@features/expedition/ExpeditionLayout.tsx";
import { NotFoundPage } from "@shared/components/NotFoundPage.tsx";

const ChooseExpeditionPage = lazy(() => import("./pages/ChooseExpeditionPage"));

const S = (el: React.ReactElement) => <Suspense fallback={<ProgressFallback />}>{el}</Suspense>;

export const expeditionRoutes: RouteObject[] = [
    {
        path: routes.expedition.base,
        element: <ExpeditionLayout />,
        errorElement: <NotFoundPage />,
        children: [{ index: true, element: S(<ChooseExpeditionPage />) }],
    },
];
