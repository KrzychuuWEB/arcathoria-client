import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { accountRoutes } from "@features/account/AccountRoutes.tsx";
import { routes } from "@app/routes.ts";
import { characterRoutes } from "@features/character/CharacterRoutes.tsx";
import { combatRoutes } from "@features/combat/CombatRouters.tsx";

const router = createBrowserRouter([
    { path: routes.home.base, element: <Navigate to={routes.account.login} replace /> },
    ...accountRoutes,
    ...characterRoutes,
    ...combatRoutes,
    { path: "*", element: <div>404</div> },
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}
