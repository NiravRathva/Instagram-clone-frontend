import React from "react";

const CreatePost = ({ setOpenCreatePost }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold mb-4">Upload a Post</h1>
        <input
          type="file"
          className="border rounded-lg py-2 px-4 mb-2 w-full"
          placeholder="Photo or video"
        />
        <input
          type="text"
          className="border rounded-lg py-2 px-4 mb-4 w-full"
          placeholder="Caption...."
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setOpenCreatePost(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
