import {BrowserRouter, Route, Routes} from "react-router-dom";
import {paths} from "./paths.js";
import HomePage from "../pages/HomePage.jsx";
import AuthRoutes from "./AuthRoutes.jsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={paths.home} element={<HomePage/>}/>
                {AuthRoutes()}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;