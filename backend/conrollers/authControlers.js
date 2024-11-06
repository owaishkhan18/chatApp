import User from "../models/Usermodels.js";
import bcrypt from "bcrypt";
import { genSalt } from "bcrypt";
import GenratejwtandSetcookies from "../utlis/genrateTokens.js";
import  jwt  from "jsonwebtoken";

// actual singhup routes in the backend sides


export const Signup = async (req, res) => {
    try {
      const { fullName, username, password, confirmPassword, gender } = req.body;
  
      // Check if passwords match
      if (password !== confirmPassword) {
        return res.status(404).json("Passwords do not match");
      }
  
      // Check if user already exists
      let user = await User.findOne({ username });
      if (user) {
        return res.status(404).json({ message: "User already exists in the database" });
      }
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashpassword = await bcrypt.hash(password, salt);
  
      // Set profile picture based on gender
      const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
      const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
      
      // Create new user
      const newUser = new User({
        fullName,
        username,
        password: hashpassword,
        gender,
        profilePic: gender === "male" ? boyPic : girlPic,
      });
  
      // Save the new user in the database
      await newUser.save();
  
      // Generate JWT token
      const token = jwt.sign(
        { id: newUser._id, username: newUser.username },
        process.env.JWT_SECRET,
        { expiresIn: '1h' } // Token will expire in 1 hour
      );
  
      // Respond with user info and token
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
        token:token  // Sending token along with user info
      });
      
    } catch (error) {
      console.error("There is an error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

export const Login = async (req,res )=>{
    try{
    const {username,password}=req.body;
    const user = await User.findOne({username});
    const isPassword = await bcrypt.compare(password, user?.password || "");

    if(!user || !isPassword){
        res.status(404).json({error:"Invalid user name or password"});
    }
    else 
    {
        // GenratejwtandSetcookies(user._id,res)
        const userId =user._id;
        // console.log(userId)
        // token which stores identiy of your in browser side
        const token = jwt.sign({userId},process.env.JWT_SECRET, { expiresIn: '15d' });
        //   console.log(token);
        //  localStorage.setItem("token", token);
           res.status(202).json({
          _id:user._id,
          username:user.username,
          profilePic:user.profilePic,
          token :token 
      })
    }
}
catch(error){
    console.log(req.body)
    res.status(500).json({error:"internal server error"});
    console.log("There is something is error")
}
}

export const Logout=(req,res )=>{
    try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
