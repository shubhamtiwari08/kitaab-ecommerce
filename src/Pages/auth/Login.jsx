import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const initialState={
    email:"",
    password:"",
  }

  const [userData,setUserData] = useState(initialState)

  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.authReducer).loggedIn
  const Navigate = useNavigate()

  const handleInput = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setUserData(prev=>({...prev,[name]:value}))
   }

   const handleSubmit = (e)=>{
    e.preventDefault()
    logIn(dispatch,userData)
    setUserData(initialState)
   
   }

   console.log(isLoggedIn)

  useEffect(()=>{
    if(isLoggedIn){
      Navigate('/')
      }
  },[isLoggedIn])


  return (
    <main className=" w-full flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-96 gap-10 bg-blue-300 p-10 rounded shadow-2xl shadow-slate-700">
        <h2 className=" text-3xl font-mono font-bold text-white">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6">
          <div className=" shadow-2xl">
            <input
              name="email"
              id="email"
              type="text"
              value={userData.email}
              placeholder="Enter Email"
              required
              onChange={handleInput}
            />
          </div>
          <div className="auth-input">
            <input
              name="password"
              id="password"
              type="password"
              value={userData.password}
              placeholder="Enter Password"
              required
              onChange={handleInput}
            />
          </div>

          <div className="flex w-full justify-between gap-2">
            <button className="btn-primary" type="submit">Login</button>
            <button className=" bg-yellow-300 text-white py-1 px-2 font-medium rounded-md hover:bg-yellow-500 shadow-md shadow-slate-600" type="button">
              Guest Login
            </button>
          </div>
        </form>
        <Link to="/signup" className="auth-link" >
        Don't have an account? Sign Up
      </Link>
      </div>
    </main>
  );
}

export default Login;
