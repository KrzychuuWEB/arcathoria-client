import type { RouteObject } from "react-router-dom";
import { routes } from "@app/routes.ts";
import * as React from "react";
import { lazy, Suspense } from "react";
import { ProgressFallback } from "@shared/components/ProgressFallback.tsx";
import CombatLayout from "@features/combat/CombatLayout.tsx";

const CombatPage = lazy(() => import("./pages/CombatPage"));

const S = (el: React.ReactElement) => <Suspense fallback={<ProgressFallback />}>{el}</Suspense>;

export const combatRoutes: RouteObject[] = [
    {
        path: routes.combat.base + "/:id",
        element: <CombatLayout />,
        errorElement: <div>Error (combat)</div>,
        children: [{ index: true, element: S(<CombatPage />) }],
    },
];
