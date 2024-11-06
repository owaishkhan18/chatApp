import React from "react"
import Message from './message'
import toast from "react-hot-toast";
import useConversation from "../../zustind/useZustand"
import {
    useState
    , useEffect
} from "react";
import { useRef } from "react";
import useListenMessages from "../../hooks/UseListenMsg.js";
import { motion } from 'framer-motion';
import animation from "../../assets/Animation - 1725864394885.json"
import Lottie  from "lottie-react";
const Messages = () => {

    // get meesagee hoooks 
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const lastMessageRef = useRef();
    let coutn=false;

// here the message is to be fetech from the data base and shows the ui/ux.
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch(`http://localhost:3000/api/message/${selectedConversation._id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": "Bearer " + localStorage.getItem("token")
                    },
                });
                const data = await res.json();
                if (data.error) throw new Error(data.error);
                setMessages(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);


    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [messages]);

    useListenMessages();
 
    return <div className="px-4 flex-1 overflow-auto   bg-opacity-30 rounded-lg shadow-inner p-6">
      {!loading && messages.length > 0 ? (
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef} className="mb-4">
            <Message message={message} />
          </div>
        ))
      ) : (
        !loading && (
            <div className="flex flex-col items-center justify-center h-full">
        <motion.h1
          className="text-center text-gray-200 font-medium mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
        >
          Send a message to start the conversation
        </motion.h1>
        <Lottie
          animationData={animation}
          className="w-32 h-32" // Adjust size as needed
        />
      </div>
        )
      )
     
      }
    </div>
     
}
export default Messages;