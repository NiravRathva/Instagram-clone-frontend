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
import FavoriteIcon from "@mui/icons-material/Favorite";

const Post = ({ post }) => {
  const { user } = useSelector((state) => state.user);
  const userId = user.user._id;
  const dispatch = useDispatch();
  const isPostLiked = post.likes.includes(userId);

  // handle like dislike of post
  const handleLike = () => {
    if (!isPostLiked) {
      dispatch(likePost({ postId: post._id, userId }));
    } else {
      dispatch(disLikePost({ postId: post._id, userId }));
    }
  };
  return (
    <div className=" rounded-md shadow-md p-8 max-w-md mb-2 mx-auto border-b border-gray-700">
      <div className="flex items-center justify-between mb-2">
        {/* userName and profile */}
        <div className="flex items-center">
          <AccountCircleIcon className="text-blue-500 text-xl" />
          <h5 className="ml-2 font-semibold">{post.userName}</h5>
        </div>
        {/* more Icon */}
        <div>
          <button className="bg-blue-500 text-white px-3 py-1 rounded-md font-semibold">
            Follow
          </button>
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
