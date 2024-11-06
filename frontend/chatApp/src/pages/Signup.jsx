
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hooks/index";
import { AiFillAccountBook } from "react-icons/ai";

import animatoinData from "../assets/Animation - 1725860439281.json"
import animationData2 from "../assets/Animation - 1725860238959.json"
import Lottie from "lottie-react"
import {motion} from "framer-motion"
const Signup=()=>{
    const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

    const { loading, signup } = useSignup();
	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
        
		await signup(inputs);
	};
   
    return ( 
        <div className="flex items-center justify-around w-full   ">
        <div className="flex flex-col items-center justify-center min-h-screen w-[30%]">
  <motion.h1
    className="text-4xl font-semibold text-white mb-6 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    In the end, it's not the years in your life that count
  </motion.h1>
  
  <Lottie 
    animationData={animationData2}
    className="w-full"
  />
</div>


  <div className="
    p-20
    w-[30%] max-w-lg bg-gray-800 rounded-xl shadow-lg 
    bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30
  ">
    <h2 className="text-2xl text-center font-semibold text-white mb-6">Sign Up to Chat App</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Full Name</label>
        <input 
          type="text" 
          placeholder="Full name" 
          className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputs.fullName}
          onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="username" className="block text-gray-300 font-medium mb-2">Username</label>
        <input 
          type="text" 
          placeholder="Username" 
          className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputs.username}
          onChange={(e) => setInputs({ ...inputs, username: e.target.value })}  
        />
      </div> 

      <div>
        <label htmlFor="password" className="block text-gray-300 font-medium mb-2">Password</label>
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}  
        />
      </div>

      <div>
        <label htmlFor="confirm-password" className="block text-gray-300 font-medium mb-2">Confirm Password</label>
        <input 
          type="password" 
          placeholder="Confirm password" 
          className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={inputs.confirmPassword}
          onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} 
        />
      </div>

      <div className="flex space-x-4">
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer ${inputs.gender === "male" ? "selected" : ""}`}>
            <span className="label-text text-gray-300">Male</span>
            <input
              type="checkbox"
              className="checkbox border-gray-600"
              checked={inputs.gender === "male"}
              onChange={() => handleCheckboxChange("male")}
            />
          </label>
        </div>
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer ${inputs.gender === "female" ? "selected" : ""}`}>
            <span className="label-text text-gray-300">Female</span>
            <input
              type="checkbox"
              className="checkbox border-gray-600"
              checked={inputs.gender === "female"}
              onChange={() => handleCheckboxChange("female")}
            />
          </label>
        </div>
      </div>

      <Link to='/Login' className="block text-sm text-blue-400 hover:underline hover:text-blue-600">Don’t have an account?</Link>
      
      <div className="text-center">
        <button 
          type="submit" 
          className="w-full bg-indigo-600 h-10 text-white py-0 px-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
  <div className="flex flex-col items-center justify-center min-h-screen w-[30%]"> 
  <motion.h1
    className="text-4xl font-semibold text-white mb-6 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    keep calm and carry on.
  </motion.h1>
  
  <Lottie 
    animationData={animatoinData}
    className="w-full"
  />
</div>

  </div>

   )

}

export default Signup;

// <div className="flex flex-col  items-center justify-center  min-w-96 mx-auto   ">
//      <div className="
//     p-4
//     h-full w-full bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 
//     ">
//         <h2 className=" items-center mb-4">Sign Up  cHat aPP</h2>
//         <form onSubmit={handleSubmit} >
//             <div className="mb-2">
//                 <label for="name" className="block text-gray-300 font-medium mb-2">Name</label>
//                 <input type="text" placeholder="Full name" className="input w-full max-w-xs h-10 text-sm" 
//                 value={inputs.fullName}
// 							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
//                  />
//             </div>

//             <div class="mb-2">
//                  <label for="username" class="block text-gray-300 font-medium mb-2">username</label>
//                 <input type="text" placeholder="username" className="input w-full max-w-xs h-10 text-sm" 
//                 value={inputs.username}
//                 onChange={(e) => setInputs({ ...inputs, username: e.target.value })}  
//                 />
//             </div> 
//             <div class="mb-2">
//                 <label for="password" class="block text-gray-300 font-medium mb-2">Password</label>
//                 <input type="text" placeholder="password" className="input w-full max-w-xs h-10 text-sm"
//                value={inputs.password}
//                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}  />
//             </div>
//             <div class="mb-2">
//                 <label for="cofirm password" class="block text-gray-300 font-medium mb-2">Password</label>
//                 <input type="text" placeholder="cofirm password" className="input w-full max-w-xs h-10 text-sm" 
//                value={inputs.confirmPassword}
//                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} 
//                 />
//             </div>

//             {/* <div class="mb-1">
//                     <label class="block text-gray-300 font-medium mb-2   ">Gender</label>
//                     <div class="flex items-center space-x-4 h-10">
                    
//                     <input  
//                      type="checkbox"
//                     id="male"
//                     className="checkbox"
//                     value="male"
//                     checked={inputs.gender === 'male'}
//                     onChange={
//                         ()=>

//                             handleCheckboxChange(inputs.gender)
                    
                    
//                     } 
//                      />
//                     <label for="male" class="font-medium text-gray-300 text-sm">Male</label>
//                     <input 
//                      type="checkbox"
//                      id="female"
//                      className="checkbox"
                   
//                      checked={inputs.gender === 'female'}
//                      onChange={
//                       ()=>
//                         handleCheckboxChange(inputs.gender)
                      
//                     }
//                       /> */}
//                     {/* <label for="male" class="font-medium text-gray-300 text-sm">Female</label>
//                     </div>
//                 </div> */}

// <div className='flex'>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer ${inputs.gender === "male" ? "selected" : ""} `}>
// 					<span className='label-text'>Male</span>
// 					<input
// 						type='checkbox'
// 						className='checkbox border-slate-900'
// 						checked={inputs.gender === "male"}
// 						onChange={() => handleCheckboxChange("male")}
// 					/>
// 				</label>
// 			</div>
// 			<div className='form-control'>
// 				<label className={`label gap-2 cursor-pointer  ${inputs.gender === "female" ? "selected" : ""}`}>
// 					<span className='label-text'>Female</span>
// 					<input
// 						type='checkbox'
// 						className='checkbox border-slate-900'
// 						checked={inputs.gender === "female"}
// 						onChange={() => handleCheckboxChange("female")}
// 					/>
// 				</label>
// 			</div>
// 		</div>
//                 <Link  to='/Login' className=" text-sm  hover:underline hover:text-blue-600  ">{"dont"} have account </Link>
//             <div class="text-center">
//                 <button type="submit" class="w-full bg-indigo-600 h-10 text-white py-0 px-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >Sign Up</button>
//             </div>
//         </form>
//     </div>

// </div>