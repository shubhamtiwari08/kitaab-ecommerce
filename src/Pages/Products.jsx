import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import { fetchCart, fetchProducts } from '../Redux/actions'

function Products() {

    const dispatch = useDispatch()
    const userId = useSelector(state => state.authReducer).user._id
    const productList = useSelector((state)=>state.productReducer)
  
    const cartList = useSelector(state => state.cartReducer).cart

    useEffect(()=>{
        fetchProducts(dispatch)
        fetchCart(dispatch,userId)
    },[cartList])


  return (
    <div>
        <Navbar/>
        <div className='p-10'>
         <h2 className='text-2xl font-bold text-blue-800'>All products ({productList.products.length})</h2>
        <div className='flex gap-16 mx-auto h-screen flex-wrap items-center'>
        {
            productList.products.map((products)=><ProductCard data={products}/>)
        }
        </div>
        </div>
    </div>
  )
}

export default Products