import AddCommentIcon from "@mui/icons-material/AddComment";

const Chatlist = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold">_careless_dude_</h5>
        <p className="cursor-pointer">
          <AddCommentIcon />
        </p>
      </div>
      <div className="flex justify-between mb-2">
        <h6 className="text-sm font-semibold">Messages</h6>
        <h6 className="text-sm text-gray-600">Requests</h6>
      </div>
      {/* chatlist */}
      <div className="flex flex-col space-y-4">
        {/* Repeat this div block for each chat item */}
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://img.freepik.com/free-photo/enthusiastic-joyful-surprised-woman-introduce-incredible-offer-pointing-finger-left-copy-space-smiling-joyfully-impressed-look-camera-touch-cheek-astonished-white-wall_176420-36348.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
            alt=""
          />
          <div>
            <h6 className="text-base font-semibold">vishal_4ever</h6>
            <p className="text-sm text-gray-600">Hiiiiiiiiiii</p>
          </div>
        </div> <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://img.freepik.com/free-photo/enthusiastic-joyful-surprised-woman-introduce-incredible-offer-pointing-finger-left-copy-space-smiling-joyfully-impressed-look-camera-touch-cheek-astonished-white-wall_176420-36348.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
            alt=""
          />
          <div>
            <h6 className="text-base font-semibold">vishal_4ever</h6>
            <p className="text-sm text-gray-600">Hiiiiiiiiiii</p>
          </div>
        </div>
        {/* Repeat similar structure for other chat items */}
      </div>
    </div>
  );
};

export default Chatlist;