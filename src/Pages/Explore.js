import Sidebar from "../Components/Sidebar.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const Explore = ({ isDarkMode, toggleDarkMode }) => {
  const { user } = useSelector((state) => state.user);
  const [randomPost, setRandomPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const token = user.token;
      try {
        const res = await axios.get(
          "https://white-waiter-xbmxc.ineuron.app:8000/api/v1/post/random",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRandomPost(res.data);
      } catch (error) {}
    };
    fetchPost();
  }, [user.token]);
  console.log(randomPost);
  return (
    <div className="flex">
      <div className="w-1/6 h-screen   border-r border-gray-700">
        <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Main Content */}
      <div className="flex  flex-1 ml-1/6 w-5/6  p-4  overflow-y-auto">
        <div className="grid grid-cols-3 gap-1">
          {randomPost.map((post) => (
            <img
              key={post._id}
              src="https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
              alt=""
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
