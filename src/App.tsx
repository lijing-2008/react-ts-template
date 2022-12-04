import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { useNavigate } from 'react-router-dom'
import { Button, Radio, ConfigProvider, theme } from 'antd'

function App() {
  const navigate = useNavigate()
  const handleClick = (url: string) => {
    navigate(url)
  }
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#ff8189'
          },
          // algorithm: theme.darkAlgorithm,
          components: {
            Radio: {
              colorPrimary: '#669966'
            }
          }
        }}
      >
        <button onClick={() => handleClick('/login')}>Login</button>
        <button onClick={() => handleClick('/home')}>Home</button>
        <Suspense fallback="">{useRoutes(routes)}</Suspense>
        <Button type="primary">button</Button>
        <Button>button</Button>
        <Radio>Radio</Radio>
      </ConfigProvider>
    </div>
  )
}

export default App
