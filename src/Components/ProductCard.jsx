import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../Redux/actions'

function ProductCard({data}) {

 
  const difference = Number(data?.originalPrice) - Number(data?.price) 
  const discount = (difference / Number(data?.originalPrice))
  const discountPercentage = Math.floor(discount*100)


  const dispatch = useDispatch()
  const cartList = useSelector(state => state.cartReducer)
  const cart = useSelector(state => state.cartReducer).cart
  const user = useSelector(state => state.authReducer).user

  const inCart = cart.map(items => items?.product?._id === data?._id).find(item => item === true)

 

  const handleCart = ()=>{
    if(inCart){
       removeFromCart(dispatch,user._id,data?._id)
    }else{
    addToCart(dispatch,user._id,data._id)
    }
  }


  return (
    <div className=' w-56 shadow-md rounded-md shadow-slate-300 p-2'>
      <div
        className=" w-42 relative pt-0 px-3 pb-4"
      >
        <img src={data?.img} alt="product" />
        <button className=' w-8 h-8 p-1 rounded-full shadow-sm shadow-slate-800 absolute top-0 right-0 bg-white'
        >
          <FontAwesomeIcon icon={faHeart}   />
        </button>
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <div className="flex justify-between items-center">
          <p>{data?.name}</p>
          <span className='bg-green-600 text-white px-2 rounded-md'>
            {data?.rating}
            <div className=' inline-block'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275L5.825 22Z"
                ></path>
              </svg>
            </div>
          </span>
        </div>
        <div className="flex justify-between">
          <div>
            <span className="font-bold">₹{data?.price}</span>
            <span className=" line-through text-slate-400 ml-2">₹{data?.originalPrice}</span>
          </div>
          <div className=" text-green-600">{data?.discountPercentage}% OFF</div>
        </div>
      </div>
      {cartList.loading ?(<button className='bg-orange-500 w-full btn-primary shadow' disabled>Add to cart</button>):<button
      className={inCart?'bg-red-500 w-full btn-primary shadow':'bg-orange-500 w-full btn-primary shadow'}
       onClick={handleCart}
      >
        {inCart ? "Remove from cart":"Add to cart"}
      </button>}
    </div>
  )
}

export default ProductCard