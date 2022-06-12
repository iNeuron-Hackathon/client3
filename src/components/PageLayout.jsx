import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const PageLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default PageLayout