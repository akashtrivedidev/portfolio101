import React from 'react'
import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'

const Container = (props) => {
  const { user } = props
  return (
    <div className=''>
      <Header avatar={user.avatar} />
      <Outlet />
      <Footer twitter={user.twitter} />
    </div>
  )
}

export default Container