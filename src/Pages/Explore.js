import Sidebar from "../Components/Sidebar.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addPosts } from "../Store/postSlice.js";
import config from "../config.js"
const Explore = ({
  isDarkMode,
  toggleDarkMode,
  setOpenCreatePost,
  openCreatePost,
}) => {
  const { user } = useSelector((state) => state.user);
  const { myPost } = useSelector((state) => state.myPost);
  const userPostArray=user.user.posts
  console.log(userPostArray);

  const [randomPost, setRandomPost] = useState([]);
const api=config.apiUrl
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPost = async () => {
      const token = user.token;
      try {
        const res = await axios.get(
          `${api}/post/random`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const postData = res.data;
        console.log(postData);
        // Fetch user data for each post and add userName to each post object
        const updatedPosts = await Promise.all(
          postData.map(async (post) => {
            const userId = post.user; // Assuming user ID is stored here
            console.log(userId);
            const userResponse = await axios.get(
              `${api}/user/${userId}`
            ); // Fetch user document
            // Extract username from the user document
            console.log(userResponse);
            const userName = userResponse.data.doc.userName;
            const followers = userResponse.data.doc.followers;
            const following = userResponse.data.doc.following;
            // Replace "username" with the actual field name
            console.log(userName);
            return { ...post, userName, followers, following }; // Add userName to the post object
          })
        );
        console.log(updatedPosts);
        setRandomPost(updatedPosts);
        dispatch(addPosts(updatedPosts));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [user.token, dispatch,userPostArray,api]);
  // console.log(randomPost);
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
