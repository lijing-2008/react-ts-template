import React, { memo } from 'react'
import { LoginWrapper } from '@/views/login/style'
import type { ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Login: React.FC<IProps> = () => {
  return <LoginWrapper>Login</LoginWrapper>
}

export default memo(Login)
