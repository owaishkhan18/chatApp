
import  jwt  from "jsonwebtoken";
// import Cookies from "cookies";
const secretKey = 'your_secret_key';
const GenratejwtandSetcookies=(payload,res)=>{
    // console.log("this is the objec id "+user )
    console.log("in this the secotion of the genrate the token "+payload)
    const token = jwt.sign({payload},process.env.JWT_SECRET, { expiresIn: '15d' });
    console.log("THIS IS THE TOKEN",token )
        //  console.log(token )
    // localStorage.setItem("token", token);
    
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        httpOnly:true,
        sameSite:"none",
        secure: process.env.NODE_ENV === "production",
    }) 
    // res.json({message:"everything is cool"})
}
export default GenratejwtandSetcookies;
