import express from "express"
import { Signup,Login,Logout } from "../conrollers/authControlers.js";
const router =express.Router()

// auth routes
router.post("/Signup" ,  Signup)
router.post("/Login",Login)
router.post("/Logout", Logout);

export default  router;