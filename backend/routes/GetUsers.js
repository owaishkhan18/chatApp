
import express from "express"

import authenticate from "../middleware/authencticjwt.js";
import ShowUser from "../conrollers/showUser.js"
const router=express.Router();

router.get("/user",authenticate,ShowUser)

export default router;


