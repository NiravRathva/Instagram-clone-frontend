import Sidebar from "../Components/Sidebar.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPosts } from "../Store/postSlice.js";
const Explore = ({
  isDarkMode,
  toggleDarkMode,
  setOpenCreatePost,
  openCreatePost,
}) => {
  const { user } = useSelector((state) => state.user);
  const { myPost } = useSelector((state) => state.myPost);
  console.log(myPost)
  const [randomPost, setRandomPost] = useState([]);

  const dispatch = useDispatch();
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
        dispatch(addPosts(res.data));
      } catch (error) {}
    };
    fetchPost();
  }, [user.token]);
  console.log(randomPost);
  return (
    <div className="flex">
      <div className="w-1/6 h-screen   border-r border-gray-700">
        <Sidebar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          openCreatePost={openCreatePost}
        />
      </div>

      {/* Main Content */}
      <div className="flex  flex-1 ml-1/6 w-5/6  p-4  overflow-y-auto">
        <div className="grid grid-cols-3 gap-1">
          {randomPost.map((post) => (
            <img
              key={post._id}
              src={post.image}
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
