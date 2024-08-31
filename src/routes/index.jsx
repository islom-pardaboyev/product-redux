import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {AllProducts, LikedProducts, OrderProducts, SavedProducts} from '../pages'

function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<AllProducts/>}/>
        <Route path='/saved' element={<SavedProducts/>}/>
        <Route path='/liked' element={<LikedProducts/>}/>
        <Route path='/ordered' element={<OrderProducts/>}/>
    </Routes>
  )
}

export default CustomRoutes