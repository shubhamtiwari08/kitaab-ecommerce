import { faCartShopping, faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { searchProducts } from '../Redux/actions'

function Navbar() {

  const [search , setSearch] = useState('')

  const Navigate = useNavigate()

  const dispatch = useDispatch()

  const handleSearch=(e)=>{
    setSearch(e.target.value)
    searchProducts(dispatch,e.target.value)
  }

  return (
    <header>
    <nav className='flex justify-between items-center bg-blue-300 shadow-md shadow-slate-400 h-16 p-8'>
      <Link to="/">
          <p className='text-2xl font-mono font-extrabold text-blue-50'>Kitaab</p>
      </Link>

      <form className="search-input">
        <input
          type="text"
          value={search}
          placeholder="Search for books"
          className='rounded-r-none outline-none'
          onChange={handleSearch}
          onClick={()=>Navigate('/products')}
        />
        <button className='btn-primary w-8 shadow rounded-l-none'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>

      <ul className="flex items-center gap-6">
        <li>
          <Link to="/products">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 14 14"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="3.5" height="13" x=".55" y=".5" rx=".5"></rect>
                <rect width="3.5" height="11" x="4.05" y="2.5" rx=".5"></rect>
                <rect
                  width="3"
                  height="11"
                  x="9.26"
                  y="2.3"
                  rx=".5"
                  transform="rotate(-14.05 10.779 7.795)"
                ></rect>
                <path d="M.55 10h3.5m0-1h3.5m2.5 2l2.88-.72"></path>
              </g>
            </svg>
          </Link>
        </li>
        <li className="list">
          <Link to="/wishlist">
            <FontAwesomeIcon icon={faHeart} />
          </Link>
          
        </li>
        <li className="list">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
         
        </li>
        <li>
          {true ? (
            <Link to="/user_profile">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          ) : (
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Navbar