import React from "react";
import Post from "../Components/Post";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/6 h-screen bg-black text-white border-r border-gray-700 ">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex  flex-1 ml-1/6 w-5/6  p-4 bg-black text-white overflow-y-auto">
        {/* posts */}
        <div className="w-3/4 bg-black text-white">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        {/* suggestion */}
        <div className="w-1/4 bg-red-200">Suggestions</div>
      </div>
    </div>
  );
};

export default Home;
