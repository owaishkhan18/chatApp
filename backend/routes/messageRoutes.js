import  express from "express";
import authenticate from "../middleware/authencticjwt.js";
import   {sendMessage,getMessage} from "../conrollers/messageController.js"
const router=express.Router();

router.post("/send/:id",authenticate,sendMessage);
router.get("/:id",authenticate,getMessage);

export default router

