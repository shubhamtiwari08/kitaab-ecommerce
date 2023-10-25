import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addToCart, removeFromCart } from '../Redux/actions';
import Navbar from '../Components/Navbar';

function SingleProduct() {

    const product = useSelector(state=>state.productReducer)

    const {id} = useParams()
    const dispatch = useDispatch()

    const cartList = useSelector(state => state.cartReducer)
  const cart = useSelector(state => state.cartReducer).cart
  const user = useSelector(state => state.authReducer).user

  
 
    const data = product.products.filter((product)=>product._id === id)[0]

    const difference = Number(data?.originalPrice) - Number(data?.price) 
    const discount = (difference / Number(data?.originalPrice))
    const discountPercentage = Math.floor(discount*100)


    const inCart = cart.map(items => items?.product?._id === data?._id).find(item => item === true)


    
  const handleCart = ()=>{
    if(inCart){
       removeFromCart(dispatch,user._id,data?._id)
    }else{
    addToCart(dispatch,user._id,data._id)
    }
  }


  return (
    <>   
     <Navbar/>
    <main className="flex flex-col justify-center items-center h-screen">
    <div className="flex p-3 shadow-lg shadow-slate-600 rounded-md">
      <div className=" w-80">
        <img src={data?.img} alt="book" />
      </div>
      <div className="pl-3 flex flex-col justify-between items-center">
        <div className="flex flex-col gap-3">
          <div className="product-detail__info-header">
            <h2 className="text-3xl font-bold">{data?.name}</h2>
            <span className="flex items-center justify-center bg-green-600 p-1 w-20 rounded text-2xl text-white">
              {data?.rating}
              <div>
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
          <div className="flex items-center justify-between ">
            <div className="flex gap-2">
              <p className="font-bold text-3xl">₹{data?.price}</p>
              <p className=" line-through text-slate-400 text-3xl">
                ₹{data?.originalPrice}
              </p>
            </div>
            <p className="text-green-600 font-bold">
              {discountPercentage}% OFF
            </p>
          </div>
          <hr />
          <div className="flex flex-col gap-2 text-lg">
            <div className="flex gap-2">
              <p>
                <b>Author :</b>
              </p>
              <p>{data?.author}</p>
            </div>
            <div className="flex gap-2">
              <p>
                <b>Category :</b>
              </p>
              <p>{data?.categoryTitle}</p>
            </div>
            <div className="flex gap-2">
              <p>
                <b>Pages: </b>
              </p>
              <p>{data?.pages}</p>
            </div>
            <div className="flex gap-2">
              <p>
                <b>Delivery: </b>
              </p>
              <p>
                {data?.delivery } day(s)
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
           
          {<button className={inCart?'bg-red-500 w-full btn-primary shadow':'bg-orange-500 w-full btn-primary shadow'} disabled={cartList.loading}
       onClick={handleCart}
      >
        {inCart ? "Remove from cart":"Add to cart"}
      </button>}
        </div>
      </div>
    </div>
  </main>
  </>

);
  
}

export default SingleProduct