import Login from "./Pages/Login.js";
import Signup from "./Pages/Signup.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Profile from "./Pages/Profile.js";
import Messages from "./Pages/Messages.js";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Explore from "./Pages/Explore.js";
import CreatePost from "./Components/CreatePost.js";
import initializeFirebaseApp from "./firebaseConfig.js";
function App() {
  const { user } = useSelector((state) => state.user);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openCreatePost, setOpenCreatePost] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  
  return (
    <div
      className={`App mx-auto bg-black ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Router>
        {openCreatePost && <CreatePost setOpenCreatePost={setOpenCreatePost} />}
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              user ? (
                <Home
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  setOpenCreatePost={setOpenCreatePost}
                  openCreatePost={openCreatePost}
                />
              ) : (
                <Login />
              )
            }
          ></Route>
          <Route
            path="/profile"
            element={
              user ? (
                <Profile
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  setOpenCreatePost={setOpenCreatePost}
                  openCreatePost={openCreatePost}
                />
              ) : (
                <Login />
              )
            }
          ></Route>
          <Route
            path="/explore"
            element={
              user ? (
                <Explore
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  setOpenCreatePost={setOpenCreatePost}
                  openCreatePost={openCreatePost}
                />
              ) : (
                <Login />
              )
            }
          ></Route>
          <Route
            path="/messages"
            element={
              user ? (
                <Messages
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
                  setOpenCreatePost={setOpenCreatePost}
                  openCreatePost={openCreatePost}
                />
              ) : (
                <Login />
              )
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <Signup isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
