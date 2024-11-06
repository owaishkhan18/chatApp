import React, { useState } from "react";
 

import useConversation from "../../zustind/useZustand";
import {motion} from "framer-motion"
const MessageInput =()=>{
   
   const [message ,setMessage]=useState();
   // here the function is to be implement the message inout  
	const { messages, setMessages, selectedConversation } = useConversation();
    // let [tempMessage,setTempmessage]=useState();

	// here is the send message function 
	const sendMessage = async (message) => {
		console.log("this is the sender id "+selectedConversation._id);
		try {
			const accessToken = localStorage.getItem('token');
			if (!accessToken) {
				console.error('No access token found');
				return;
			}
			const url =`http://localhost:3000/api/message/send/${selectedConversation._id}`;
			const res = await fetch(url, {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
					"Authorization":"Bearer "+localStorage.getItem("token")
				},
				body: JSON.stringify({ message }),
			});
			const data = await res.json();
			
			if (data.error) throw new Error(data.error);

			setMessages([...messages, data]);
		} catch (error) {
			console.log("something error ")
		}
	};
  const handleSubmit=async (e)=>{
	console.log("this is the message "+message)
     e.preventDefault();
	 if(!message) return ;
	 await sendMessage(message);

	 setMessage("");
  }
   return  <form className='px-4 my-3' onSubmit={handleSubmit}>
	 <div className="flex items-center rounded-lg bg-gray-800 p-2">
	   <motion.input
		 type="text"
		 placeholder="Type your message..."
		 className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-300'
		 value={message}
		 onChange={(e) => {
		   setMessage(e.target.value);
		 }}
		 whileFocus={{ scale: 1.05 }}
		 whileHover={{ scale: 1.02 }}
	   />
	   <motion.button
		 className="ml-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full focus:outline-none"
		 whileHover={{ scale: 1.1 }}
		 whileTap={{ scale: 0.95 }}
	   >
		 Send
	   </motion.button>
	 </div>
   </form>
   
}
export default  MessageInput ;