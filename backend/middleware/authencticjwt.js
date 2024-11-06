import jwt from "jsonwebtoken"
// import mongoose  from "mongoose";
import User from "../models/Usermodels.js";
const authenticate= async(req,res,next)=>{  
  try{
      const authHeader= req.headers.authorization;

    //console.log(authHeader)

      const token = authHeader.split(' ')[1];

    //   console.log("this is  the token "+token)

      if (!token) {
        return res.status(401).json({ error: "Unauthorized - No Token Provided" });
    }
    
       const decode = jwt.verify(token, process.env.JWT_SECRET);
      if(!decode){
      return   res.status(401).json({message:" is something error "})
      }
    //   console.log(decode)
     const user = await User.findById(decode.userId).select("-password");
    //  console.log("inside the midddle ware"+user);   
     if(!user){

      res.send("invalid");

     }
     req.user=user ;
     next();
    }
    catch(error){
        console.log(req.headers)
        res.status(404).json({message:"some thing went wrong "})
    }
}
export default authenticate;