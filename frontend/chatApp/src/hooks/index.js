import { JSON } from "body-parser"
import { useState } from "react"
import toast from "react-hot-toast"
import { FaUbuntu } from "react-icons/fa"
import axios from "axios"
import {useAuthContext}  from "../context/Authentication.jsx"

// this is for the signup hooks
const useSignup=()=>{
      const [loading ,setLoading]=useState(false)
      const {setAuthUser} = useAuthContext()

      const signup= async (input)=>{
        const {fullName,username,password,confirmPassword,gender}=input;

     const sucess=errorHandling (fullName,username,password,confirmPassword,gender);
        if(!sucess) return ;
        setLoading(true);
        try{
         const response = await axios.post("http://localhost:3000/api/auth/Signup",{
          fullName, username, password, confirmPassword, gender
         });
         const data = response.data;
          console.log("data");
         localStorage.setItem("token",data);
         setAuthUser(data)
        }
        catch (error) {
            // Code to handle the error
            console.error('An error occurred:', error);
          }finally{
          setLoading(false )
        }
      }

      return {loading,signup};
      }


export default useSignup;
function errorHandling(fullName,username,password,confirmPassword,gender ){
   
  //  console.log(fullName,username,password,confirmPassword,gender);
   
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please enter the filed")
        console.log("enter the cofirm")
        return false 

    }
    if(password != confirmPassword)
    {
        toast.error("please enter the correct pass ")
        console.log("enter the correct pass ")
        return false ;
    }
    if(password.length <6){
        toast.error("passwrod must be 6 letter")
        console.log("enter the cofirm")
        return false;
    }
    return true ;
}

