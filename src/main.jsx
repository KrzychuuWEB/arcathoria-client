import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import AppProviders from "./contexts/AppProviders.jsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <AppProviders>
                <App/>
            </AppProviders>
        </BrowserRouter>
    </StrictMode>,
)
