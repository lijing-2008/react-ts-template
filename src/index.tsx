import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import 'normalize.css'
import '@/assets/css/index.css'
import App from '@/App'
import theme from '@/assets/theme'
import store from '@/store'
import ddRequest from '@/service'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </ThemeProvider>
)

// test axios code
ddRequest
  .post({
    url: '/login',
    data: {
      username: 'coderlj',
      password: '1231'
    }
  })
  .then((res) => {
    console.log('res', res)
  })
  .catch((err) => {
    console.log('------error!-----', err)
  })
