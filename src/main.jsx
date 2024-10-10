import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QuizeProvider } from './Context/QuizContext.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <QuizeProvider>
    <App />
    </QuizeProvider>
    </BrowserRouter>
)
