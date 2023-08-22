import Login from "./Pages/Login.js";
import Signup from "./Pages/Signup.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home.js";
import Profile from "./Pages/Profile.js";
import Messages from "./Pages/Messages.js";
import { useState } from "react";
import { useSelector } from "react-redux";
function App() {
  // Access user object from Redux state
  const { user } = useSelector((state) => state.user);
  //  state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div
      className={`App  mx-auto bg-black ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              user ? (
                <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
              ) : (
                <Login />
              )
            }
            // element={renderProtectedRoute(<Home />)}
          ></Route>
          <Route
            path="/profile"
            element={
              user ? (
                <Profile
                  isDarkMode={isDarkMode}
                  toggleDarkMode={toggleDarkMode}
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
