import CallIcon from "@mui/icons-material/Call";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import InfoIcon from "@mui/icons-material/Info";
import MicIcon from "@mui/icons-material/Mic";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Chat = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Header section */}
      <div className="sticky top-0 z-10 p-4 flex justify-between items-center border-b">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover cursor-pointer"
              src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
              alt=""
            />
          </div>
          <h6 className="text-sm font-semibold text-white cursor-pointer">Vishal_4ever</h6>
        </div>
        <div className="flex space-x-2 ">
          <CallIcon  className="cursor-pointer"/>
          <VideoCallIcon  className="cursor-pointer"/>
          <InfoIcon  className="cursor-pointer"/>
        </div>
      </div>
      {/* Messages */}
      <div className="flex-grow p-4 overflow-y-auto">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        {/* Repeat messages */}
      </div>
      {/* Message input section */}
      <div className="sticky bottom-0 z-10 py-1 px-4 mx-2  border rounded-full">
        <div className="flex items-center space-x-2">
          <EmojiEmotionsIcon className="cursor-pointer"/>
          <input
            className="flex-grow px-3 py-2 border-none outline-none bg-inherit focus:outline-none"
            type="text"
            placeholder="Message..."
          />
          <div className="flex space-x-2">
            <MicIcon  className="cursor-pointer"/>
            <PermMediaIcon  className="cursor-pointer"/>
            <FavoriteBorderIcon className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
