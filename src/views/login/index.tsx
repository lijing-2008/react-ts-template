import React, { memo } from 'react'
import { LoginWrapper } from '@/views/login/style'
import type { ReactNode } from 'react'
import { useAppSelector, useAppDispatch, appShallowEqual } from '@/store'
import { addCountAction } from '@/store/features/home'

interface IProps {
  children?: ReactNode
}

const Login: React.FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.home.count,
      message: state.home.message
    }),
    appShallowEqual
  )

  return (
    <LoginWrapper>
      <div>homeStore</div>
      <div>
        <span>count: {count}</span>
        <button onClick={() => dispatch(addCountAction(1))}>+1</button>
      </div>
      <div>message: {message}</div>
    </LoginWrapper>
  )
}

export default memo(Login)
