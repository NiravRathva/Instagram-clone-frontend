import Sidebar from "../Components/Sidebar.js";
import Chatlist from "../Components/Chatlist.js";
import Chat from "../Components/Chat.js";

const Messages = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/6 h-screen   border-r border-gray-700">
        <Sidebar isDarkMode={isDarkMode}  toggleDarkMode={toggleDarkMode}/>
      </div>

      {/* Main Content */}
      <div className="flex  flex-1 ml-1/6 w-5/6  p-4  overflow-y-auto">
        {/* chatlist */}
        <div className="w-1/3  p-4">
            <Chatlist/>
        </div>
        {/* chat */}
        <div className="w-2/3 border-l border-gray-700">
            <Chat/>
        </div>
      </div>
    </div>
  );
};

export default Messages;
