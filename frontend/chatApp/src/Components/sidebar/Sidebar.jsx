import React from "react";
import Conversations from "./Conversations";
import Logout from "./Logout";
import SearchInput from "./SearchInput";
import { Player } from "@lottiefiles/react-lottie-player";
import spinnerAnimation from "../../assets/Animation - 1725866065981.json"; // Adjust the path based on your folder structure
import anotherAnimation from "../../assets/Animation - 1725860238959.json"; // Adjust as needed
import Dropdown3 from "./Dropdown"; // Ensure correct import

const Sidebar = () => {
  return (
    <div className="py-1 border-red-500 w-2/5">
      <div className="flex items-center p-2 justify-around">
        <img src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/fc71370b-7e61-4fc8-bc97-6511998da23c/8cd739aa-5145-4c39-9539-762123fb2413.png" alt="User" className="w-8 h-8 rounded-full border-red-400" />
        <Dropdown3 className="mx-5" />
      </div>
      <div className="transition-opacity duration-1000 opacity-100">
        <Conversations />
      </div>
      <Logout />
    </div>
  );
};

export default Sidebar;
