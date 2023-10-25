import React from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'

function Products() {

    const productList = useSelector((state)=>state.productReducer)

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