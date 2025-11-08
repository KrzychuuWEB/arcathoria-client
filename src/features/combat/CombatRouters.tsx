import type { RouteObject } from "react-router-dom";
import { routes } from "@app/routes.ts";
import * as React from "react";
import { lazy, Suspense } from "react";
import { ProgressFallback } from "@shared/components/ProgressFallback.tsx";
import CombatLayout from "@features/combat/CombatLayout.tsx";
import { NotFoundPage } from "@shared/components/NotFoundPage.tsx";
import { guardedLoader } from "@app/guard/guardedLoader.ts";
import { onlyWithActiveCombat } from "@app/guard/policyFactory.ts";

const CombatPage = lazy(() => import("./pages/CombatPage"));

const S = (el: React.ReactElement) => <Suspense fallback={<ProgressFallback />}>{el}</Suspense>;

export const combatRoutes: RouteObject[] = [
    {
        path: routes.combat.base + "/:id",
        element: <CombatLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                loader: guardedLoader(onlyWithActiveCombat),
                element: S(<CombatPage />),
            },
        ],
    },
];
