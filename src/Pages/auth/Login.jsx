import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <main className=" w-full flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center w-96 gap-10 bg-blue-300 p-10 rounded shadow-2xl shadow-slate-700">
        <h2 className=" text-3xl font-mono font-bold text-white">Login</h2>
        <form className="flex flex-col items-center justify-center gap-6">
          <div className=" shadow-2xl">
            <input
              id="email"
              type="text"
              value={""}
              placeholder="Enter Email"
              required
              
            />
          </div>
          <div className="auth-input">
            <input
              id="password"
              type="password"
              value={""}
              placeholder="Enter Password"
              required
             
            />
          </div>

          <div className="flex w-full justify-between gap-2">
            <button className="btn-primary">Login</button>
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
