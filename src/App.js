import Login from "./Pages/Login.js";
import Signup from "./Pages/Signup.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Profile from "./Pages/Profile.js";
import Messages from "./Pages/Messages.js";
function App() {
  return (
    <div className="App  mx-auto bg-black">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/messages" element={<Messages/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
