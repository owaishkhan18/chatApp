import { compareSync } from "bcrypt";
import User from "../models/Usermodels.js"

  const ShowUser= async(req,res)=>{
    try {
      console.log("hii i am there")
         const logedInuser=req.user;
        //  console.log(logedInuser)
         const allUser= await User.find({_id:{$ne:logedInuser}}).select("-password")
         res.status(200).json(allUser)
    }
    catch(error){
      console.log("in this section")
        console.log("there is something error")
        res.status(404).json(error)
    }
}

export default ShowUser;
