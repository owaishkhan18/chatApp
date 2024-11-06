
// import React, { useState } from "react";
import Converstion from "./Conversaton"
import React, { useEffect, useState } from "react";
import axios from "axios";
import getConverstaion from "../../hooks/useConversation" 
const Conversations=()=>{
   
    // const {Conversations}= getConverstaion(); 
    const [conversations,setConversation]=useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get("http://localhost:3000/api/users/user", {
                headers: {
                  "Authorization": "Bearer " + localStorage.getItem("token")
                }
              });
      
              if (response.status === 200) {
                const data = response.data;
                // console.log("Fetched data:", data);
                setConversation(data); // Update state with fetched data
              } else {
                console.error("Failed to fetch data. Status:", response.status);
              }
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
        // getConversation();
    
        fetchData()
    }, []); 

    

    return <div className=" py-2 flex flex-col h-[580px] border border-solid border-gray-500 rounded-lg overflow-auto"> 
     {
    
    conversations.map((Conversation)=>
    (
         <Converstion 
           key={Conversation._id}
           Conversation={Conversation}
         />

     )
    )
     } 
     


    </div>
}
export default Conversations;