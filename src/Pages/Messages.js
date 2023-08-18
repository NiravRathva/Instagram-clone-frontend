import Sidebar from "../Components/Sidebar.js";
import Chatlist from "../Components/Chatlist.js";
const Messages = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/6 h-screen bg-black text-white  border-r border-gray-700">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex  flex-1 ml-1/6 w-5/6  p-4 bg-black text-white overflow-y-auto">
        {/* chatlist */}
        <div className="w-1/3 bg-black text-white p-4">
            <Chatlist/>
        </div>
        {/* chat */}
        <div className="w-2/3 border-l border-gray-700"></div>
      </div>
    </div>
  );
};

export default Messages;
