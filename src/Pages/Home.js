import React from "react";
import Post from "../Components/Post";
import Sidebar from "../Components/Sidebar";
import Suggestion from "../Components/Suggestion";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import config from "../config.js"
const Home = ({
  toggleDarkMode,
  isDarkMode,
  setOpenCreatePost,
  openCreatePost,
}) => {
  // Access user object from Redux state
  const { user } = useSelector((state) => state.user);
  const [post, setPost] = useState([]);
  const userFollowing = user.user.following.length;
  const myrandomPost = useSelector((state) => state.myPost.posts);
  console.log(myrandomPost);
  const api=config.apiUrl
  useEffect(() => {
    if (userFollowing > 10) {
      const fetchPost = async () => {
        try {
          const token = user.token;
          console.log("fetchpost");
          const res = await axios.get(
            `${api}/post`,
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
                `${api}/user/${userId}`
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
          console.log(updatedPosts);
        } catch (error) {
          console.log(error);
        }
      };

      fetchPost();
    } else {
      // Use the posts from Redux store
      setPost(myrandomPost);
    }
  }, [user.token, userFollowing, myrandomPost]);

  return (
    <div className="flex  ">
      {/* Sidebar */}
      <div className="w-1/5 lg:w-1/6 h-screen   border-r border-gray-700">
        <Sidebar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          setOpenCreatePost={setOpenCreatePost}
          openCreatePost={openCreatePost}
        />
      </div>

      {/* Main Content */}
      <div className="flex  flex-1 ml-1/6 w-5/6  p-4  overflow-y-auto">
        {/* posts */}
        <div className="w-4/5 lg:w-2/3">
          {post.map((singlePost) => (
            <Post key={singlePost._id} post={singlePost} />
          ))}
          {/* <Post/> */}
        </div>
        {/* suggestion */}
        <div className="w-1/3 border-l border-gray-700 hidden lg:block">
          <Suggestion />
        </div>
      </div>
    </div>
  );
};

export default Home;
