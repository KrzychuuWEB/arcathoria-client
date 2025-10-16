import type { RouteObject } from "react-router-dom";
import { routes } from "@app/routes.ts";
import * as React from "react";
import { lazy, Suspense } from "react";
import { ProgressFallback } from "@shared/components/ProgressFallback.tsx";
import DashboardLayout from "@features/dashboard/DashboardLayout.tsx";

const DashboardPage = lazy(() => import("./pages/./DashboardPage"));

const S = (el: React.ReactElement) => <Suspense fallback={<ProgressFallback />}>{el}</Suspense>;

export const dashboardRoutes: RouteObject[] = [
    {
        path: routes.dashboard.base,
        element: <DashboardLayout />,
        errorElement: <div>Error (dashbaord)</div>,
        children: [{ index: true, element: S(<DashboardPage />) }],
    },
];
