import React from "react"

import Sidebar from "../Components/sidebar/Sidebar"
import MessageContainer from "../Components/messages/messageContiner"
const Home=()=>{
  return <div className="flex flex-1 justify-between sm:min-h-[400px] md:min-h-[500px] rounded-xl border-2 bg-gray-600 bg-clip-padding backdrop-blur-lg bg-opacity-40 shadow-2xl overflow-scroll">
 
  <Sidebar className=" sm:w-1/4 lg:w-1/5 p-4" />

  <MessageContainer className="flex-1  p-4" />
</div>


  //   return  <div className="flex-1 flex justify-between  sm:min-h-[400px] md:min-h-[500px] rounded-lg overflow-auto border-red-500 bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40">
  //   <Sidebar />
  //   <MessageContainer />
  // </div>

}
export default Home;