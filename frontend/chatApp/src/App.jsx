import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Navigate,Routes,Route} from "react-router-dom"
import Login from './pages/Login'
 import Signup from "./pages/Signup"
//  import { useAuthContext } from "./context/AuthContext";

 import Home from  "./pages/Home"

// import { GiToaster } from 'react-icons/gi'
import {Toaster}  from "react-hot-toast"
import { useAuthContext } from './context/Authentication'

function App() {

  const { authUser } = useAuthContext();
  return <div className='flex
    min-h-screen '>

      <Routes >
        <Route  path='/' element={authUser ? <Home/> :<Navigate to={'/Login'} />}></Route>
        <Route path='/Login' element={ authUser ? <Navigate to="/" /> : <Login/>} />
        <Route path='/Signup' element={authUser ? <Navigate to='/' /> : <Signup />} />
      </Routes>
      
      <Toaster/>
   </div>
    
} 


export default App;
