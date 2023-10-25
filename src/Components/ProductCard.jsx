import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ProductCard() {
  return (
    <div className=' w-56 shadow-md rounded-md shadow-slate-300 p-2'>
      <div
        className=" w-42 relative pt-0 px-3 pb-4"
      >
        <img src={'https://rukminim1.flixcart.com/image/612/612/kgwld3k0/book/1/9/4/rich-dad-poor-dad-original-imafxf885pytvycy.jpeg?q=70'} alt="product" />
        <button className=' w-8 h-8 p-1 rounded-full shadow-sm shadow-slate-800 absolute top-0 right-0 bg-white'
        >
          <FontAwesomeIcon icon={faHeart}   />
        </button>
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <div className="flex justify-between items-center">
          <p>name</p>
          <span className='bg-green-600 text-white px-2 rounded-md'>
            4
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
            <span className="font-bold">₹60</span>
            <span className=" line-through text-slate-400 ml-2">₹40</span>
          </div>
          <div className=" text-green-600">50% OFF</div>
        </div>
      </div>
      <button
       className='w-full btn-primary shadow bg-orange-500'
      >
         Go to Cart
      </button>
    </div>
  )
}

export default ProductCard