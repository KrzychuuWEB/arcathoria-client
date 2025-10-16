import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { accountRoutes } from "@features/account/AccountRoutes.tsx";
import { routes } from "@app/routes.ts";
import { characterRoutes } from "@features/character/CharacterRoutes.tsx";
import { combatRoutes } from "@features/combat/CombatRouters.tsx";
import { expeditionRoutes } from "@features/expedition/ExpeditionRoutes.tsx";
import { dashboardRoutes } from "@features/dashboard/DashboardRoutes.tsx";

const router = createBrowserRouter([
    { path: routes.home.base, element: <Navigate to={routes.account.login} replace /> },
    ...accountRoutes,
    ...characterRoutes,
    ...dashboardRoutes,
    ...combatRoutes,
    ...expeditionRoutes,
    { path: "*", element: <div>404</div> },
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}
