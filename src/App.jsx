import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./views/home/index.jsx";
import LoginPage from "./views/login/index.jsx";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App
