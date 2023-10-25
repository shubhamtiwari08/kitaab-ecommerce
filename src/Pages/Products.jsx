import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../Components/ProductCard'
import { fetchCart, fetchProducts } from '../Redux/actions'

function Products() {

    const dispatch = useDispatch()
    const userId = useSelector(state => state.authReducer).user._id
    const productState = useSelector((state)=>state.productReducer)
    const searchWord = productState.search
    const productList = productState.products

   

    // searchfilterfunction
    const searchFiltered =(products,searchKey)=>{
      return products.filter(book => book.name.toLowerCase().includes(searchKey.toLowerCase()))
    }

  
  
    const searchFilterProducts =  searchFiltered(productList,searchWord)

    console.log(searchFilterProducts)

    useEffect(()=>{
        fetchProducts(dispatch)
        fetchCart(dispatch,userId)
    },[])


  return (
    <div>
        <Navbar/>
        <div className='p-10'>
         <h2 className='text-2xl font-bold text-blue-800'>All products ({productList.length})</h2>
        <div className='flex gap-16 mx-auto h-screen flex-wrap '>
        {
            searchFilterProducts.map((products)=><ProductCard data={products}/>)
        }
        </div>
        </div>
    </div>
  )
}

export default Products