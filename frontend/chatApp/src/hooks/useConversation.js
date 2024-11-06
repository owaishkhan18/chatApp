
import { useDebugValue, useEffect, useState } from "react"
import React from "react";
import axios from "axios";
const useConversation= ()=>{
  const [conversation, setConversation]= useState([]);
  
  useEffect(() => {
    const getConversation = async () => {
        try {
            const response = await axios.get("http://43.204.147.252:3000/api/users/user", {
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        });
        const data = response.data;
        console.log(data)
        setConversation(data); // Update state with fetched data
        console.log(conversation)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getConversation();
}, []); 

 return {conversation};
}

export default useConversation