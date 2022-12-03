import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ProfileWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Profile: FC<IProps> = () => {
  return <ProfileWrapper>Profile</ProfileWrapper>
}

export default memo(Profile)
