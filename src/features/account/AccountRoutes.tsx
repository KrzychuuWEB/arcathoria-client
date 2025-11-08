import type { RouteObject } from "react-router-dom";
import { routes } from "@app/routes.ts";
import * as React from "react";
import { Suspense } from "react";
import AccountLayout from "@features/account/AccountLayout.tsx";
import { ProgressFallback } from "@shared/components/ProgressFallback.tsx";
import { NotFoundPage } from "@shared/components/NotFoundPage.tsx";
import LoginPage from "@features/account/pages/LoginPage.tsx";
import RegisterPage from "@features/account/pages/RegisterPage.tsx";
import { guardedLoader } from "@app/guard/guardedLoader.ts";
import { onlyForGuest } from "@app/guard/policyFactory.ts";

const S = (el: React.ReactElement) => <Suspense fallback={<ProgressFallback />}>{el}</Suspense>;

export const accountRoutes: RouteObject[] = [
    {
        path: routes.account.base,
        element: <AccountLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                loader: guardedLoader(onlyForGuest),
                element: S(<LoginPage />),
            },
            {
                path: "login",
                loader: guardedLoader(onlyForGuest),
                element: S(<LoginPage />),
            },
            {
                path: "register",
                loader: guardedLoader(onlyForGuest),
                element: S(<RegisterPage />),
            },
        ],
    },
];
