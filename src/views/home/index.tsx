import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { HomeWrapper } from '@/views/home/style'
import { Outlet, useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = () => {
  const navigate = useNavigate()
  const handleClick = (url: string) => {
    navigate(url)
  }
  return (
    <HomeWrapper>
      <div>
        <button onClick={() => handleClick('/home/about')}>About</button>
        <button onClick={() => handleClick('/home/profile')}>Profile</button>
      </div>
      {/*解决二级路由加载的时候一级路由也闪的问题*/}
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </HomeWrapper>
  )
}

export default memo(Home)
