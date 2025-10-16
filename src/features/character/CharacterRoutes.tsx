import type { RouteObject } from "react-router-dom";
import { routes } from "@app/routes.ts";
import * as React from "react";
import { lazy, Suspense } from "react";
import { ProgressFallback } from "@shared/components/ProgressFallback.tsx";
import CharacterLayout from "@features/character/CharacterLayout.tsx";
import { NotFoundPage } from "@shared/components/NotFoundPage.tsx";

const CharacterListPage = lazy(() => import("./pages/CharacterListPage"));
const CharacterCreatePage = lazy(() => import("./pages/CharacterCreatePage"));

const S = (el: React.ReactElement) => <Suspense fallback={<ProgressFallback />}>{el}</Suspense>;

export const characterRoutes: RouteObject[] = [
    {
        path: routes.character.base,
        element: <CharacterLayout />,
        errorElement: <NotFoundPage />,
        children: [
            { index: true, element: S(<CharacterListPage />) },
            { path: "list", element: S(<CharacterListPage />) },
            { path: "create", element: S(<CharacterCreatePage />) },
        ],
    },
];
