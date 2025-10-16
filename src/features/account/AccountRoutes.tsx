import type { RouteObject } from "react-router-dom";
import { routes } from "@app/routes.ts";
import * as React from "react";
import { lazy, Suspense } from "react";
import AccountLayout from "@features/account/AccountLayout.tsx";
import { ProgressFallback } from "@shared/components/ProgressFallback.tsx";
import { NotFoundPage } from "@shared/components/NotFoundPage.tsx";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

const S = (el: React.ReactElement) => <Suspense fallback={<ProgressFallback />}>{el}</Suspense>;

export const accountRoutes: RouteObject[] = [
    {
        path: routes.account.base,
        element: <AccountLayout />,
        errorElement: <NotFoundPage />,
        children: [
            { index: true, element: S(<LoginPage />) },
            { path: "login", element: S(<LoginPage />) },
            { path: "register", element: S(<RegisterPage />) },
        ],
    },
];
