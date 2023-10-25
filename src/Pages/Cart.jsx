import React from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'

function Cart() {

  const cart = useSelector(state => state.cartReducer)

  return (
    <div>
    <Navbar/>
    {/* cart items */}
     <div>
       {
        
       }
     </div>
    </div>
  )
}

export default Cart