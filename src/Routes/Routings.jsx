import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../Pages/auth/Login'
import Signup from '../Pages/auth/Signup'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Wishlist from '../Pages/Wishlist'
import Profile from '../Pages/Profile'
import Products from '../Pages/Products'

function Routings() {
  return (
    <div>
        <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </div>
  )
}

export default Routings