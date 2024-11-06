import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/Animation - 1725866065981.json";

const SearchInput = ({ onLottieClick }) => {
  return (
    <div className="myClass flex justify-around items-center p-0">
      <motion.form
        className="relative w-full max-w-md bg-gray-800 p-2 rounded-full shadow-lg"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative flex items-center">
          {/* Clickable Lottie animation */}
          <div
            className="absolute inset-y-0 left-4 flex items-center cursor-pointer"
            onClick={() => {
              const data = true;
              onLottieClick(data); // Calling the parent's function with data
            }}
          >
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{ width: 40, height: 40 }} // Adjust size as needed
            />
          </div>

          {/* Input field */}
          <input
            type="text"
            placeholder="Ask AI or Search.."
            className="w-full py-3 pl-14 pr-4 rounded-full border border-gray-300 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />
          <motion.button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 rounded-full p-3 hover:bg-blue-600 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l5-5m0 0l-5-5m5 5H4" />
            </svg>
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default SearchInput;
