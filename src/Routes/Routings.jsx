import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from '../Pages/auth/Login'
import Signup from '../Pages/auth/Signup'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Wishlist from '../Pages/Wishlist'
import Profile from '../Pages/Profile'
import Products from '../Pages/Products'
import SingleProduct from '../Pages/SingleProduct'
import RequireAuth from '../Pages/auth/RequireAuth'
import { useSelector } from 'react-redux'

function Routings() {

  const auth = useSelector(state=>state.authReducer)
  const login = auth.loggedIn

  return (
    <div>
        <Routes>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/cart' element={<RequireAuth isLoggedIn={login} ><Cart/></RequireAuth>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/user_profile' element={<Profile/>}/>
            <Route path='/products/:id' element={<SingleProduct/>}/>
        </Routes>
    </div>
  )
}

export default Routings