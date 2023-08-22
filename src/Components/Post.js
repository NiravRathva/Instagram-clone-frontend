import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SendIcon from "@mui/icons-material/Send";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Post = ({post}) => {

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
          <MoreHorizIcon className="text-gray-500" />
        </div>
      </div>
      {/* photo or Video */}
      <div>
        <img
          src="https://assets.architecturaldigest.in/photos/64cc0230b462697ebd0b5f2b/master/w_1600,c_limit/DSC00560-2.jpg"
          alt=""
          className="w-96 rounded-lg shadow-md"
        />
      </div>

      <div className="mt-4 flex justify-between ">
        {/* likes, comment and share */}
        <div className="flex space-x-4 ">
          <FavoriteBorderIcon />
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
