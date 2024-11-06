
// import {use}
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../hooks/userLogin";
import { IoAppsSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import animatoinData from "../assets/Animation - 1725823523740.json"
import Lottie from "lottie-react"
const fadeIn = {
  animation: 'fadeIn 1s ease-out',
};

const styles = `
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;

function Login(){
    const [username ,setUser]=useState("");
    const [password,setPassword]=useState("");
    const { loading, login } = useLogin();

    const handleSubmit= async (e)=>{
      e.preventDefault()
      // console.log(username,password);
      await login(username,password)
    }

    return    <>
    <style>{styles}</style>
    <div className="flex items-center justify-around w-full">
      <div className="w-[30%]  bg-gray-800 rounded-md shadow-lg p-10 bg-opacity-30 backdrop-blur-md" style={fadeIn}>
        <h1 className="text-3xl font-semibold text-center text-white mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 text-gray-400">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
              onChange={(e) => {
                setUser(e.target.value);
                // console.log(e.target.value);
              }}
            />
          </label>
          <label className="flex items-center gap-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 text-gray-400">
              <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
            </svg>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(e.target.value);
              }}
            />
          </label>
          <Link to="/Signup" className="block text-sm text-blue-400 hover:underline mb-4 text-center">Don't have an account?</Link>
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors transform hover:scale-105">
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="w-[80%] max-w-md bg-gray-800 rounded-md shadow-lg p-10 bg-opacity-30 backdrop-blur-md"> 
         {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-semibold text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to ChatApp
      </motion.h1>
      <motion.h4
        className="text-4xl font-semibold text-gray-300 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Connect with family and friends !
      </motion.h4>
  <Lottie animationData={animatoinData}></Lottie>
</div>

    </div>
  </>
  
}
export default Login ;
{/* <div className="flex flex-col  items-center justify-center  min-w-90 mx-auto ">

<div className="
p-6
h-full w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
">
<h1 className="text-3xl font-semibold text-center text-gray-300"> Login</h1>
<form onSubmit={handleSubmit}>

<label className="input input-bordered flex items-center gap-2 mb-3   min-w-4 h-10">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 opacity-10"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
<input type="text" className="w-30" placeholder="Username"
// value={password} 
 onChange={(e)=>{
  setUser(e.target.value)
  console.log(e.target.value);
 }}

/>
</label >
        <label className="input input-bordered flex items-center gap-2 mb-3 h-10">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 opacity-10"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
<input type="Password" className=" " placeholder="password" 
onChange={
(e)=>{
  setPassword(e.target.value)
  console.log(e.target.value)
}
}  />
</label>
<Link to='/Signup' className=" h-96 text-sm  hover:underline hover:text-blue-600 mb-3 ">{"dont"} have account </Link>
        <div class="flex justify-center">
            <button type="submit" class="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-colors">Login</button>
        </div>
        
    </form>
</div>
</div>    */}