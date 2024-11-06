import React from "react";
import { useAuthContext } from "../../context/Authentication";
// import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustind/useZustand";
const Message = ({ message, temp }) => { 

	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
    const  userObject = JSON.parse(authUser);
    var  fromMe = message.senderId === userObject._id;

	if(temp){
		console.log("hii")
      fromMe=true;
	}
    
    // console.log("this is the message sender id "+ message.senderId);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? selectedConversation?.profilePic : userObject.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-500" :"";

	const shakeClass = message.shouldShake ? "shake" : "";
	// console.log("shake class "+message.shouldShake )
  
	return (
		<div className={`chat ${chatClassName}`} > 
		
			{/* {console.log("this is the profile pic "+profilePic)} */}
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			{/* <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div> */}
		</div>
	);
};
export default Message;
