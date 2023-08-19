import React from "react";
import Post from "../Components/Post";
import Sidebar from "../Components/Sidebar";
import Suggestion from "../Components/Suggestion";

const Home = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/6 h-screen   border-r border-gray-700">
        <Sidebar isDarkMode={isDarkMode}  toggleDarkMode={toggleDarkMode}/>
      </div>

      {/* Main Content */}
      <div className="flex  flex-1 ml-1/6 w-5/6  p-4  overflow-y-auto">
        {/* posts */}
        <div className="w-2/3  ">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        {/* suggestion */}
        <div className="w-1/3 border-l border-gray-700">
          <Suggestion />
        </div>
      </div>
    </div>
  );
};

export default Home;
