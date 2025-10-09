import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../features/home/pages/HomePage.tsx";
import { accountRoutes } from "@features/account/accountRoutes.tsx";
import { routes } from "@app/routes.ts";

const router = createBrowserRouter([
    { path: routes.home.base, element: <HomePage /> },
    ...accountRoutes,
    { path: "*", element: <div>404</div> },
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}
