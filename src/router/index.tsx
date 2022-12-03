import { RouteObject } from 'react-router-dom'
import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Login = lazy(() => import('@/views/login'))
const Home = lazy(() => import('@/views/home'))
const About = lazy(() => import('@/views/home/c-views/about'))
const Profile = lazy(() => import('@/views/home/c-views/profile'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home/about',
        element: <About />
      },
      {
        path: '/home/profile',
        element: <Profile />
      }
    ]
  }
]
export default routes
