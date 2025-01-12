import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./views/home/index.jsx";
import LoginPage from "./views/login/index.jsx";
import RegisterPage from "./views/register/index.jsx";
import {path} from "./utils/routes.js";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={path.home} element={<HomePage/>}/>
                <Route path={path.login} element={<LoginPage/>}/>
                <Route path={path.register} element={<RegisterPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
