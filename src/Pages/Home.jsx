import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import ProductCard from '../Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Redux/actions'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router'

function Home() {

    const cart = useSelector(state => state.cartReducer)
    const product = useSelector(state=>state.productReducer)

    const dispatch = useDispatch()
    const Navigate = useNavigate()

    const bestsellers = product.products.filter((product)=>product.isBestSeller === true)




    useEffect(()=>{
        fetchProducts(dispatch)
    },[])

    

  return (
    <div>
        <Navbar/>
        {/* hero section */}
        <div className='flex justify-between items-center shadow-sm shadow-blue-300 mt-3 mb-3 mx-3 rounded-md'>
            <div className='flex flex-col justify-between h-56 pl-2 items-start'>
                <h1 className='text-6xl bg-orange-400 text-white p-2 rounded-md shadow-sm shadow-slate-800 hover:bg-blue-600'>Welcome to kitaab</h1>
                <h2 className='text-3xl bg-blue-300 p-2 rounded-md shadow-sm shadow-slate-600 cursor-pointer hover:bg-blue-600 text-white '>Find you favorite book here !</h2>
                <button className='font-bold text-white bg-orange-400 p-2 rounded shadow-sm shadow-slate-600 hover:bg-red-500 '>shop now</button>
            </div>
            <div className='w-42 overflow-hidden'>
            <img src="https://kitaab-store.netlify.app/static/media/books.fca89f4babc9342fde13.jpg" alt="kitaab" className='w-96' />
            </div>
        </div>
        {/* category section */}
        <div className='flex flex-col items-center mb-10'>
            <h3 className='text-4xl mb-3 font-bold text-blue-900'>Explore categories</h3>
           <div className='flex w-full justify-around px-16'>
            <div className='section-card' onClick={()=>Navigate('/products')}>
                <img src="https://cdn-icons-png.flaticon.com/512/5526/5526277.png" alt="fiction" className='w-20' />
                <h4>Fiction</h4>
            </div>
            <div className='section-card' onClick={()=>Navigate('/products')}>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/nonfiction-4278721-3557423.png" alt="non-fiction" className='w-20' />
                <h4>Non-Fiction</h4>
              
            </div>
            <div className='section-card' onClick={()=>Navigate('/products')}>
                <img src="  https://cdn.iconscout.com/icon/premium/png-256-thumb/audiobook-4278761-3557463.png" alt="self-help" className='w-20' />
                <h4>Self Help</h4>
              
            </div>
            </div>
        </div>
        {/* best sellersection */}
        <div className='flex flex-col items-center mb-10'>
         <h3 className='text-4xl mb-3 font-bold text-blue-900'>Best Sellers</h3>
            <div className='flex items-center gap-4'>
            {
                bestsellers.map(
                    product => <ProductCard data={product}/>
                )
            }
            </div>
        </div>
        {/* footer */}
        <Footer/>

    </div>
  )
}

export default Home