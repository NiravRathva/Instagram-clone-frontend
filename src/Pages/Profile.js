import React from "react";
import Sidebar from "../Components/Sidebar.js";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import config from "../config.js";
const Profile = ({
  toggleDarkMode,
  isDarkMode,
  setOpenCreatePost,
  openCreatePost,
}) => {
  const { user } = useSelector((state) => state.user);
  const api = config.apiUrl;
  const userPost = user.user.posts;
  const token = user.token;
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        // Create an array of promises for fetching user posts
        const postPromises = userPost.map(async (postId) => {
          const response = await axios.get(`${api}/post/${postId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          return response.data; // Return the post data
        });

        const fetchedPosts = await Promise.all(postPromises);
        setUserPosts(fetchedPosts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserPosts();
  }, [userPost, token]);
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className=" w-1/5 lg:w-1/6 h-screen  border-r border-gray-700">
        <Sidebar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          setOpenCreatePost={setOpenCreatePost}
          openCreatePost={openCreatePost}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:ml-1/6 w-4/5 lg:w-5/6 lg:p-8  p-4">
        {/* Profile */}
        <div className="flex lg:px-8  profile-section border-b border-gray-700 lg:mx-4">
          <div>
            <div className="lg:mb-8">
              {/* Profile pic */}
              <img
                src="https://img.freepik.com/free-photo/confident-young-man_1098-20868.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
                alt="fdsfdsfsdfd"
                className="h-16 w-16 md:w-28 md:h-28 lg:h-36 lg:w-36 rounded-full lg:ml-8"
              />
            </div>
            <div className="flex lg:my-4  hidden lg:flex">
              <div className="text-center mr-8 ">
                <img
                  className="w-20 h-20 rounded-full m-2"
                  src="https://img.freepik.com/free-photo/attractive-enthusiastic-armenian-young-woman-curly-hair-pointing-looking-intrigued-left-show-index-fingers-awesome-blank-space-advertisement-smirking-joyfully-introducing-product-white-background_176420-35016.jpg?size=626&ext=jpg&ga=GA1.2.423171406.1685598216&semt=sph"
                  alt=""
                />
                <p>highlight</p>
              </div>
              <div className="text-center mr-8">
                <img
                  className={`w-20 h-20 rounded-full m-2 ${
                    isDarkMode ? "filter invert" : ""
                  }`}
                  src="https://img.icons8.com/?size=512&id=1501&format=png"
                  alt=""
                />
                <p>new</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mb-4 px-2 lg:px-8">
              {/* User details */}

              <h6 className="text-lg font-semibold  mr-3">
                {user.user.userName}
              </h6>
              <button
                className={` ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-800 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-black"
                } text-sm font-medium mr-3  border outline-none border-none  rounded py-1 px-3 mr-2`}
              >
                Edit Profile
              </button>
              <button
                className={` ${
                  isDarkMode
                    ? "bg-gray-700 hover:bg-gray-800 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-black"
                } text-sm font-medium mr-3  border outline-none border-none  rounded py-1 px-3`}
              >
                View Archive
              </button>
              <SettingsIcon className="text-gray-400 " />
            </div>

            {/* Followers and following */}
            <div className="flex justif-normal mb-1 lg:mb-4 px-2 lg:px-8">
              <h6 className="lg:text-lg font-semibold mr-2 lg:mr-8">
                <span className="mr-1 lg:mr-2">{user.user.posts.length}</span>
                posts
              </h6>
              <h6 className="lg:text-lg font-semibold mr-2 lg:mr-8">
                <span className="mr-1 lg:mr-2">
                  {user.user.followers.length}
                </span>
                followers
              </h6>
              <h6 className="lg:text-lg font-semibold mr-2 lg:mr-8">
                <span className="mr-1 lg:mr-2">
                  {user.user.following.length}
                </span>
                following
              </h6>
            </div>

            {/* Bio */}
            <div className=" px-2 lg:px-8 mb-2">
              <h5 className="font-semibold mb-1">{user.user.name}</h5>
              <p>{user.user.bio} 🏹</p>
              <p>Weird 😜</p>
              <p>sleepy 😴</p>
            </div>
          </div>
        </div>

        {/* Posts, Saved, Tagged */}
        <div className="flex flex-col  posts-saved-tagged">
          <div className="section-titles flex justify-center my-4">
            <h5 className="text-xl font-semibold mx-4 text-xs">POSTS</h5>
            <h5 className="text-xl font-semibold mx-4 text-xs">SAVED</h5>
            <h5 className="text-xl font-semibold mx-4 text-xs">TAGGED</h5>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {userPosts.map((post) => (
              <img
                key={post.doc._id}
                src={post.doc.image}
                alt="fdfdf"
                className="w-full h-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
