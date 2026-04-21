import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.tsx'
import ReactGA from 'react-ga4'
import { env } from './util/env'
import './index.css'

if (env.VITE_GA_ID) {
  ReactGA.initialize(env.VITE_GA_ID)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
