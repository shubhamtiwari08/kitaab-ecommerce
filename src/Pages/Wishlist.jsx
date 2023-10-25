import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Components/Navbar'

function Wishlist() {

  const wishlist = useSelector((state)=>state.wishlistReducer)

  return (
    <div>
      <div>
    <Navbar/>
    {/* wishlist items */}
     <div>
       {
        
       }
     </div>
    </div>
    </div>
  )
}

export default Wishlist