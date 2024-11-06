import React, { useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustind/useZustand";
import { motion } from "framer-motion";
import ChatWithAi from "../chatBot/first";
import SearchInput from "../sidebar/SearchInput"; // Import the child component

// This is the main message container
const MessageContainer = () => {
  const { selectedConversation } = useConversation();
  const [childData, setChildData] = useState("");
  //  const counter=false;
  // This is the callback function that will be passed to the child
  const handleLottieClick = (dataFromChild) => {
    console.log('Data received from child:', dataFromChild);
    setChildData(dataFromChild); 
   
  };

  return (
    <div className="flex flex-col w-3/5 h-[700px] overflow-auto">
      {/* Pass the callback function to SearchInput as a prop */}
      <SearchInput onLottieClick={handleLottieClick} />

      {/* Render selected conversation */}
      {!selectedConversation ? (
           <NochatSelected childData={childData} />
      ) : (
        <>
          <motion.div
            className="bg-gray-700 text-white py-3 shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto flex items-center justify-between">
              {/* Text Section */}
              <motion.div
                className="text-lg font-semibold"
                whileHover={{ scale: 1.05, color: "#4ade80" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span>To: {selectedConversation.fullName}</span>
              </motion.div>

              {/* Profile Picture */}
              <div className="flex-shrink-0">
                <img
                  src={selectedConversation.profilePicUrl || "/default-profile.png"} // Placeholder if no profile pic
                  alt={selectedConversation.fullName}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
              </div>
            </div>
          </motion.div>

          {/* Messages and Input */}
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

// No chat selected component
const NochatSelected = ({ childData }) => {

  return (
  <>
    {childData ? (
        <ChatWithAi/>
      ):( <>
        <section className="text-gray-400 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-blue-400">ChatApp</span>
          </h1>
          <p className="text-lg mb-8">Connect with friends, family, and colleagues with ease.</p>
          <a href="#" className="bg-blue-500 hover:bg-blue-600 text-gray-400 font-semibold py-2 px-6 rounded-full focus:outline-none">
            Get Started
          </a>
        </div>
      </section>
      </>
      )}

     </>

  );
};
