import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n';

import './theme.css'
import './App.css'   // oder './index.css' – je nachdem wie die Datei heißt

import React from 'react'
import ReactDOM from 'react-dom/client'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
