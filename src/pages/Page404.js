import React from 'react'
import { NavLink } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
      <h1>Page 404</h1>
      <h2>Go to <NavLink to="/">HOME Page</NavLink></h2>
    </div>
  )
}

export default Page404
