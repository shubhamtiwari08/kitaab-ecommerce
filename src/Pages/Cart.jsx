import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../Redux/actions'
import ProductCard from '../Components/ProductCard'
import { useParams } from 'react-router'
import Footer from '../Components/Footer'

function Cart() {

 

  const dispatch = useDispatch()

  const userId = useSelector(state => state.authReducer).user._id

    const cartList = useSelector(state => state.cartReducer).cart

  

  useEffect(()=>{
    fetchCart(dispatch,userId)
  },[cartList])

  return (
    <div>
    <Navbar/>
    {/* cart items */}
     <div className='flex gap-10 p-10 flex-wrap'>
      {cartList.length === 0 ?
      (<div className='flex items-center justify-center w-full h-screen'>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" alt="cart" />
        <h1 className='text-3xl text-orange-400'>YOUR CART IS EMPTY</h1>
        </div>)
      :
      (
        cartList.map(items => <div key={items.product?._id}><ProductCard data={items?.product}/></div>)
       )}
     </div>
     <Footer/>
    </div>
  )
}

export default Cart