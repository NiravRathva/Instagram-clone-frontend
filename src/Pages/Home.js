import React from "react";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/6 h-screen bg-black text-white ">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className=" flex w-5/6  p-4">
        {/* posts */}
        <div className="w-3/4">post</div>
        {/* suggestion */}
        <div className="w-1/4">Suggestions</div>
      </div>
    </div>
  );
};

export default Home;
