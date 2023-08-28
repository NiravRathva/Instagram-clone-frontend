import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SendIcon from "@mui/icons-material/Send";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { likePost, disLikePost } from "../Store/postSlice";
import { red } from "@mui/material/colors";
import { followUser } from "../Store/userSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";
const Post = ({ post }) => {
  const { user } = useSelector((state) => state.user);
  const userId = user.user._id;
  const dispatch = useDispatch();
  const isPostLiked = post.likes.includes(userId);
  const isUserFollowing = user.user.following.includes(post.user);

  const postOwener = post.user;
  // handle like dislike of post
  const handleLike = () => {
    if (!isPostLiked) {
      dispatch(likePost({ postId: post._id, userId }));
    } else {
      dispatch(disLikePost({ postId: post._id, userId }));
    }
  };

  const handleFollow = async () => {
    try {
      const updatedFollowing = [...post.following, postOwener];
      const updatedFollowers = [...post.followers, userId];

      const updatedUserData = {
        following: updatedFollowing,
      };
      const updatedPostOwnerData = {
        followers: updatedFollowers,
      };
      if (postOwener === userId) {
        console.log("user and postowener are same ");
        return;
      }
      const resUser = await axios.patch(
        `https://white-waiter-xbmxc.ineuron.app:8000/api/v1/user/${userId}`,
        updatedUserData
      );
      const resPost = await axios.patch(
        `https://white-waiter-xbmxc.ineuron.app:8000/api/v1/user/${postOwener}`,
        updatedPostOwnerData
      );
      dispatch(
        followUser({
          userId,
          postOwener,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" rounded-md shadow-lg p-8 max-w-md mb-4 mx-auto border-b bg-gray-100 border-gray-800">
      <div className="flex items-center justify-between mb-2">
        {/* userName and profile */}
        <div className="flex items-center">
          <AccountCircleIcon className="text-blue-500 text-xl" />
          <h5 className="ml-2 font-semibold">{post.userName}</h5>
        </div>
        {/* more Icon */}
        <div>
         {!isUserFollowing?( <button
            className="bg-blue-500 text-white px-3 py-1 rounded-md font-semibold"
            onClick={handleFollow}
          >
            Follow
          </button>):""}
          <MoreHorizIcon className="text-gray-500 ml-2" />
        </div>
      </div>
      {/* photo or Video */}
      <div>
        <img src={post.image} alt="" className="w-96 rounded-lg shadow-md" />
      </div>

      <div className="mt-4 flex justify-between ">
        {/* likes, comment and share */}
        <div className="flex space-x-4 ">
          {isPostLiked ? (
            <FavoriteIcon onClick={handleLike} sx={{ color: red[500] }} />
          ) : (
            <FavoriteBorderIcon onClick={handleLike} />
          )}

          <CommentIcon />
          <SendIcon />
        </div>
        {/* save Icon */}
        <div className="">
          <BookmarkBorderIcon />
        </div>
      </div>

      <div>
        <h6 className="my-1">{post.likes.length} likes</h6>
        <h6 className="my-1">
          <span className="font-semibold">{post.userName}</span> {post.caption}
        </h6>
        <input
          type="text"
          placeholder="Add a comment...."
          className="bg-inherit border-none outline-none"
        />
      </div>
    </div>
  );
};

export default Post;
