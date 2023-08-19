import Login from "./Pages/Login.js";
import Signup from "./Pages/Signup.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Profile from "./Pages/Profile.js";
import Messages from "./Pages/Messages.js";
import { useState } from "react";
function App() {
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
          <Route
            path="/"
            element={
              <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <Profile
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          ></Route>
          <Route
            path="/messages"
            element={
              <Messages
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
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
