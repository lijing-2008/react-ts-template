import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

function App() {
  const navigate = useNavigate()
  const handleClick = (url: string) => {
    navigate(url)
  }
  return (
    <div className="App">
      <button onClick={() => handleClick('/login')}>Login</button>
      <button onClick={() => handleClick('/home')}>Home</button>
      <Suspense fallback="">{useRoutes(routes)}</Suspense>
      <Button type="primary">button</Button>
    </div>
  )
}

export default App
