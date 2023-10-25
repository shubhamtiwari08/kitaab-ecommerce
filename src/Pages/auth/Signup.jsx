import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../../Redux/actions'
import { toast } from 'react-toastify'

function Signup() {
  const initialState = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
   }

  const [userData,setUserData] = useState( initialState)

  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const signup = useSelector(state=>state.authReducer).signedUp

  

  


   const handleInput = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setUserData(prev=>({...prev,[name]:value}))
   }

   const handleSubmit = (e)=>{
    e.preventDefault()
    signUp(dispatch,userData)
    setUserData(initialState)
   }

   useEffect(()=>{
    if(signup){
      Navigate('/login')
      toast.success('signed up !', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    }
   },[signup])


  return (
    <main className=" w-full flex items-center justify-center h-screen">
      {/* signup card */}
    <div className="flex flex-col items-center justify-center w-96 gap-10 bg-blue-300 p-10 rounded shadow-2xl shadow-slate-700">
      <h2 className=' text-3xl font-mono font-bold text-white'>Sign Up</h2>
      <form  onSubmit={handleSubmit}  className="flex flex-col items-center justify-center gap-8">
         
          <div className="auth-input">
            <input
              name="firstName"
              id="firstName"
              type="text"
              value={userData.firstName}
              placeholder="First Name"
              required
              onChange={handleInput}
            />
          </div>
          <div className="auth-input">
            <input
              name="lastName"
              id="lastName"
              type="text"
              value={userData.lastName}
              placeholder="Last Name"
              required
              onChange={handleInput}
            />
          </div>
          <div className="auth-input">
            <input
              name='email'
              id="email"
              type="email"
              value={userData.email}
              placeholder="Enter Email"
              required
              onChange={handleInput}
            />
          </div>
          <div className="auth-input password-input">
            <input
              name="password"
              id="password"
              type={ "text" }
              value={userData.password}
              placeholder="Enter Password"
              required
              onChange={handleInput}
            />
            
          </div>
        
        <button className="btn-primary" type='submit'>Sign Up</button>
      </form>
      <Link to="/login" className="auth-link" >
        Already have an account? Log in
      </Link>
    </div>
  </main>
  )
}

export default Signup