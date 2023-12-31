import React, { useState, useEffect } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../App.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import initializeFirebaseApp from "../firebaseConfig.js";
import { useDispatch } from "react-redux";
import { addPostIdToUser } from "../Store/userSlice.js";
import config from "../config.js";
const CreatePost = ({ setOpenCreatePost }) => {
  const [postFile, setPostFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [downloadURL, setDownloadURL] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false)

  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const api = config.apiUrl;
  // Initialize Firebase App using the API key from Redux store
  const app = initializeFirebaseApp(user.firebaseApiKey);
  // Initialize Firebase Storage
  const storage = getStorage(app);

  const handleFileUpload = async () => {
    if (postFile) {
      const storageRef = ref(storage, `posts/${postFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, postFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(Math.round(progress));
        },
        (error) => {
          console.log("Upload error:", error);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          setDownloadURL(url);
        }
      );
    }
  };

  useEffect(() => {
    if (postFile) {
      handleFileUpload();
    }
  }, [postFile]);
  const upload = async () => {
    try {
      setLoading(true)
      const res = await axios.post(
        `${api}/post`,
        { caption, image: downloadURL },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch(addPostIdToUser(res.data._id));
      setLoading(false)
    } catch (error) {
      console.log("Upload error:", error);
    }
    setOpenCreatePost(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-hidden">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold mb-4">Upload a Post</h1>
        {progress > 0 ? (
          "Uploading:" + progress + "%"
        ) : (
          <input
            type="file"
            className="border rounded-lg py-2 px-4 mb-2 w-full"
            accept="image/*,video/*"
            onChange={(e) => setPostFile(e.target.files[0])}
          />
        )}
        <input
          type="text"
          className="border rounded-lg py-2 px-4 mb-4 w-full"
          placeholder="Caption...."
          onChange={(e) => setCaption(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
          onClick={upload}
        >
          Share
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setOpenCreatePost(false)}
        >
          Close
        </button>
      </div>
      {loading ? (
          <div class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
            <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
          </div>
        ) : (
          ""
        )}
    </div>
  );
};

export default CreatePost;
