import type { RouteObject } from "react-router-dom";
import { routes } from "@app/routes.ts";
import * as React from "react";
import { lazy, Suspense } from "react";
import { ProgressFallback } from "@shared/components/ProgressFallback.tsx";
import DashboardLayout from "@features/dashboard/DashboardLayout.tsx";
import { NotFoundPage } from "@shared/components/NotFoundPage.tsx";
import { guardedLoader } from "@app/guard/guardedLoader.ts";
import { onlyAccountAndCharacter } from "@app/guard/policyFactory.ts";

const DashboardPage = lazy(() => import("./pages/./DashboardPage"));

const S = (el: React.ReactElement) => <Suspense fallback={<ProgressFallback />}>{el}</Suspense>;

export const dashboardRoutes: RouteObject[] = [
    {
        path: routes.dashboard.base,
        element: <DashboardLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                loader: guardedLoader(onlyAccountAndCharacter),
                element: S(<DashboardPage />),
            },
        ],
    },
];
