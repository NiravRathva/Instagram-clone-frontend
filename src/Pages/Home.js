import React from "react";
import Post from "../Components/Post";
import Sidebar from "../Components/Sidebar";
import Suggestion from "../Components/Suggestion";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const Home = ({ toggleDarkMode, isDarkMode }) => {
  // Access user object from Redux state
  const { user } = useSelector((state) => state.user);
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = user.token; // Replace with your actual token
        const res = await axios.get(
          "https://white-waiter-xbmxc.ineuron.app:8000/api/v1/post",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const postData = res.data;
        // Fetch user data for each post and add userName to each post object
        const updatedPosts = await Promise.all(
          postData.map(async (post) => {
            const userId = post.user; // Assuming user ID is stored here
            const userResponse = await axios.get(
              `https://white-waiter-xbmxc.ineuron.app:8000/api/v1/user/${userId}`
            ); // Fetch user document
            // Extract username from the user document
            // console.log(userResponse)
            const userName = userResponse.data.data.userName;
            // Replace "username" with the actual field name
            // console.log(userName);
            return { ...post, userName }; // Add userName to the post object
          })
        );

        setPost(updatedPosts);
        // console.log(updatedPosts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [user.token]);
  console.log(post);
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/6 h-screen   border-r border-gray-700">
        <Sidebar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Main Content */}
      <div className="flex  flex-1 ml-1/6 w-5/6  p-4  overflow-y-auto">
        {/* posts */}
        <div className="w-2/3  ">
          {post.map((singlePost) => (
            <Post key={singlePost._id} post={singlePost} />
          ))}
          {/* <Post/> */}
        </div>
        {/* suggestion */}
        <div className="w-1/3 border-l border-gray-700">
          <Suggestion />
        </div>
      </div>
    </div>
  );
};

export default Home;
