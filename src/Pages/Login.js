import React from "react";
import instaLogo from "../Images/Logo-Instagram-1.png";
import facebookLogo from "../Images/fb.png";
import playStoreLogo from "../Images/google-play-badge.png";
import microsoftLogo from "../Images/microsoft.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { isEmailValid } from "../Util/validEmail";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginFailure, loginSuccess } from "../Store/userSlice";
import config from "../config.js";
const Login = () => {
  // State variables for form input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  // console.log(user.data);
  const dispatch = useDispatch();
  // Hook for navigation
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const api = config.apiUrl;
  // Function to handle login  form submission
  const handleLogIn = async (e) => {
    dispatch(loginStart());
    e.preventDefault();
    if (!isEmailValid(email)) {
      setErr("Invalid email format");
      return;
    }
    try {
      // Sending a POST request to the signin API endpoint
      const res = await axios.post(`${api}/auth/signin`, { email, password });
      dispatch(loginSuccess(res.data));
      console.log(res.data);
      // Navigating to the home page on successful login
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(loginFailure());
      setErr("something went wrong");
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col max-w-[350px] h-screen mx-auto justify-center content-center  space-y-4   w-full">
      {/* form section */}
      <div className="border-2 border-slate-300 p-4 flex flex-col items-center py-2 px-14 ">
        {/* logo */}
        <img className="w-44 h-24 mb-2" src={instaLogo} alt="" />
        {/* form */}
        <form className="w-full mx-12" onSubmit={handleLogIn}>
          <input
            className="w-full p-2 border rounded mb-3 text-xs bg-gray-50"
            type="text"
            placeholder="Enter your  Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full p-2 border rounded mb-3 text-xs bg-gray-50"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
          />
          <button
            className="w-full bg-blue-400 hover:bg-blue-600 text-white p-2  rounded-xl text-base"
            type="submit"
          >
            Log in
          </button>
          {err !== "" && <h4 className="text-red-300"> something went wrong</h4>}
        </form>
        <div className="flex items-center justify-center w-full mt-4">
          <span className="border-t border-gray-400 w-28"></span>
          <p className="mx-2 text-gray-600 text-sm">OR</p>
          <span className="border-t border-gray-400 w-28"></span>
        </div>
        {/* log in with facebook  */}
        <div className="flex items-center space-x-2 mt-4">
          <img className="w-4 h-4" src={facebookLogo} alt="Facebook" />
          <p className="text-blue-800 text-sm">Login with Facebook</p>
        </div>
        <div>
          <p className="text-blue-500 text-xs my-4">Forgot password</p>
        </div>
      </div>
      
      {/* don't have an account section  */}
      <div className="text-center border-2 border-slate-300 p-4 text-sm">
        Don't have an account?{" "}
        <Link to="/signup">
          <span className="font-bold text-blue-500 cursor-pointer">
            Sign Up
          </span>
        </Link>
      </div>
      <div className="text-center">
        {/* get the app section  */}
        <p className="my-2 text-sm">Get the app</p>

        {/* showing loader  */}
        {user.loading ? (
           <div class="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
           <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
         </div>
        ) : (
        ""
        )}
       
        <div className="flex justify-center space-x-2 content-center">
          <img
            className="max-w-full h-16"
            src={playStoreLogo}
            alt="Playstore"
          />
          <img
            className="max-w-full h-11 mt-2"
            src={microsoftLogo}
            alt="Microsoft"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
