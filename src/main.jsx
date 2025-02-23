import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import AppProviders from "./contexts/AppProviders.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AppProviders>
            <App/>
        </AppProviders>
    </StrictMode>,
)
