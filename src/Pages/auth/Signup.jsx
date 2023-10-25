import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <main className=" w-full flex items-center justify-center h-screen">
    <div className="flex flex-col items-center justify-center w-96 gap-10 bg-blue-300 p-10 rounded shadow-2xl shadow-slate-700">
      <h2 className=' text-3xl font-mono font-bold text-white'>Sign Up</h2>
      <form   className="flex flex-col items-center justify-center gap-8">
         
          <div className="auth-input">
            <input
              id="firstName"
              type="text"
              value={""}
              placeholder="First Name"
              required
              
            />
          </div>
          <div className="auth-input">
            <input
              id="lastName"
              type="text"
              value={""}
              placeholder="Last Name"
              required
             
            />
          </div>
          <div className="auth-input">
            <input
              id="email"
              type="email"
              value={""}
              placeholder="Enter Email"
              required
              
            />
          </div>
          <div className="auth-input password-input">
            <input
              id="password"
              type={ "text" }
              value={""}
              placeholder="Enter Password"
              required
         
            />
            
          </div>
          <div className="auth-input password-input">
            <input
              id="confirm-password"
              type={"text"}
              value={""}
              placeholder="Confirm Password"
              required
              
            />
          </div>
        
        <button className="btn-primary">Sign Up</button>
      </form>
      <Link to="/login" className="auth-link" >
        Already have an account? Log in
      </Link>
    </div>
  </main>
  )
}

export default Signup