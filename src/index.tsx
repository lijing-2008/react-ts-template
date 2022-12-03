import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'
import '@/assets/css/index.css'
import App from '@/App'
import theme from '@/assets/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
)
