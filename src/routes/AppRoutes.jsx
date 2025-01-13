import {BrowserRouter, Route, Routes} from "react-router-dom";
import {paths} from "./paths.js";
import HomePage from "../pages/HomePage.jsx";
import AuthRoutes from "./AuthRoutes.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path={paths.home} element={<HomePage/>}/>
                {AuthRoutes()}
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;