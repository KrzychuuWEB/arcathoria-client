import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { accountRoutes } from "@features/account/AccountRoutes.tsx";
import { routes } from "@app/routes.ts";

const router = createBrowserRouter([
    { path: routes.home.base, element: <Navigate to={routes.account.login} replace /> },
    ...accountRoutes,
    { path: "*", element: <div>404</div> },
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}
