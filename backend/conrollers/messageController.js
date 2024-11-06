import { TbMessageCog } from "react-icons/tb";
import Conversation from "../models/conversation.model.js";
import Message from "../models/MessageModel.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        console.log("this is the message: ", message);

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message // Use `message` instead of `messages`
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        const receiverSocketId = getReceiverSocketId(receiverId);
        console.log("this is receiver socket ID: ", receiverSocketId);
        if (receiverSocketId) {
            console.log("message delivery");
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }
        res.json({ newMessage });

    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send("Something went wrong");
    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] }
        }).populate("messages");

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.error("Error in getMessages controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};


/*
import converSation from "../models/conversation.model.js"

import  Meassage from "../models/MessageModel.js"

const sendMessage=async (req,res)=>{
    try{
        const {message}=req.body;
        const {id:receverId}=req.params;
        console.log(req.body)
        const senderId=req.user._id;
        console.log("nothing errpr ");

        let conservation = await  converSation.findOne({
              participatns: { $all:[senderId, receverId]
        },
        }) 


        if(!conservation){
            conservation= await conservation.Create({
                participatns:
                    [senderId,receverId],
            })
        }
       
        const newMessage= new message({
            senderId,
            receverId,
            message
        })

        if(newMessage){
            conservation.message.push(newMessage._id);
        }
        await conservation.save();
        await message.save();
        // res.status.json({newMessage})
    }
    catch(error){
        console.log("there are some error occured")
        console.log(req.body)
        res.send("something error");
    }
    //  console.log("thi is the sender id "+senderId);
   
    // res.status(404).json({error:"something went wrong"});
   }

   export default  sendMessage;   is there any bug of this code 

   */