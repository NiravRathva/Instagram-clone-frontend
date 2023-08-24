import Sidebar from "../Components/Sidebar.js";
const Explore = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="flex">
      <div className="w-1/6 h-screen   border-r border-gray-700">
        <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Main Content */}
      <div className="flex  flex-1 ml-1/6 w-5/6  p-4  overflow-y-auto">
        <div className="grid grid-cols-3 gap-1">
          <img
            src="https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
            alt=""
            className="w-full h-auto"
          />
          <img
            src="https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
            alt=""
            className="w-full h-auto"
          />{" "}
          <img
            src="https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
            alt=""
            className="w-full h-auto"
          />{" "}
          <img
            src="https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
            alt=""
            className="w-full h-auto"
          />{" "}
          <img
            src="https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
            alt=""
            className="w-full h-auto"
          />{" "}
          <img
            src="https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
            alt=""
            className="w-full h-auto"
          />{" "}
          <img
            src="https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
