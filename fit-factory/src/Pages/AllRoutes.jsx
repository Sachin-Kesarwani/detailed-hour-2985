import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
