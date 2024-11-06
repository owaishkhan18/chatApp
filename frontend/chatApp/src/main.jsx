import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { Router } from 'express'
// import {AuthcontexProveider} from "./context/AuthContext.jsx"
import {AuthContextProvider} from "./context/Authentication.jsx"

import { SocketContextProvider } from './context/socketContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter/> */}
  <BrowserRouter>
  <AuthContextProvider>
  <SocketContextProvider>
					<App />
				</SocketContextProvider>
  </AuthContextProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
