import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppRouter} from './AppRouter.jsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './assets/styles/theme.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
