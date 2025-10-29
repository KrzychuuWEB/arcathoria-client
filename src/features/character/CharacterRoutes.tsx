import type { RouteObject } from "react-router-dom";
import { routes } from "@app/routes.ts";
import * as React from "react";
import { lazy, Suspense } from "react";
import { ProgressFallback } from "@shared/components/ProgressFallback.tsx";
import CharacterLayout from "@features/character/CharacterLayout.tsx";
import { NotFoundPage } from "@shared/components/NotFoundPage.tsx";
import { guardedLoader } from "@app/guard/guardedLoader.ts";
import { onlyForAccount } from "@app/guard/policyFactory.ts";

const CharacterListPage = lazy(() => import("./pages/CharacterListPage"));
const CharacterCreatePage = lazy(() => import("./pages/CharacterCreatePage"));

const S = (el: React.ReactElement) => <Suspense fallback={<ProgressFallback />}>{el}</Suspense>;

export const characterRoutes: RouteObject[] = [
    {
        path: routes.character.base,
        element: <CharacterLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                loader: guardedLoader(onlyForAccount),
                element: S(<CharacterListPage />),
            },
            {
                path: "list",
                loader: guardedLoader(onlyForAccount),
                element: S(<CharacterListPage />),
            },
            {
                path: "create",
                loader: guardedLoader(onlyForAccount),
                element: S(<CharacterCreatePage />),
            },
        ],
    },
];
