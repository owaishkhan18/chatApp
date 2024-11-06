import React from "react";
import Conversations from "./Conversations";
import useConversation from "../../zustind/useZustand"; // Corrected import path
import { useSocketContext } from "../../context/socketContext";

const Converstion = ({ Conversation }) => {
	const { selectedConversation, setSelectedConversation } = useConversation(); // Ensure consistent naming with the hook

  const isSelected = selectedConversation?._id === Conversation._id;

  const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(Conversation._id);
  console.log(isOnline)

  return (
    <>
      <div
        className={`flex items-center py-1 gap-2 cursor-pointer px-1 hover:bg-blue-500 border-t border-gray-300 ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => {
          console.log("click here");
          setSelectedConversation(Conversation); // Ensure proper function name
        }}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={Conversation.profilePic} alt={Conversation.username} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-400">{Conversation.username}</p>
            <span className="text-xl">😎</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div> {/* Corrected class name */}
    </>
  );
};

export default Converstion;
