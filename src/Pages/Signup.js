import React from "react";
import instaLogo from "../Images/Logo-Instagram-1.png";
import facebookLogo from "../Images/facebook-logo-clipart-hd-10.jpg";
import playStoreLogo from "../Images/google-play-badge.png";
import microsoftLogo from "../Images/microsoft.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { isEmailValid } from "../Util/validEmail";
import config from "../config.js";
import { useSelector } from "react-redux";

const Signup = () => {
  // State variables for form input fields
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  // Hook for navigation
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const api = config.apiUrl;
  useEffect(() => {
    if (err && err.response && err.response.data.error.code === 11000) {
      // Display error message for duplicate username or email
      console.log("userName and email should be unique");
    }
  }, [err]);
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      setErr("Invalid email format");
      return;
    }
    try {
      setLoading(true);
      // Sending a POST request to the signup API endpoint
      const res = await axios.post(`${api}/auth/signup`, {
        email: email,
        name: fullName,
        userName: userName,
        password: password,
      });
      // Navigating to the login page on successful signup

      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setErr("something went wrong");

      console.log(error);
    }
  };

  return (
    <div className="flex flex-col max-w-[350px] mx-auto justify-center content-center  space-y-4  mt-4 w-full">
      {/* login form section */}
      <div className="border-2 border-slate-300 p-4 flex flex-col items-center py-2 px-14 ">
        {/* logo */}
        <img className="w-44 h-24 mb-2" src={instaLogo} alt="" />
        <p className="text-lg font-medium text-center">
          Sign up to see photos and videos from your friends.
        </p>
        {/* login with facebook */}
        <button className="flex items-center space-x-2 mt-4 text-white bg-blue-400 hover:bg-blue-600  w-full  p-2  rounded-xl text-base">
          <span className="bg-none ">
            <img
              className="w-7 h-7 p-1 mr-2"
              src={facebookLogo}
              alt="Facebook"
            />
          </span>
          Login with Facebook
        </button>
        {/* OR */}
        <div className="flex items-center justify-center w-full my-4">
          <span className="border-t border-gray-400 w-28"></span>
          <p className="mx-3 text-gray-600 text-sm">OR</p>
          <span className="border-t border-gray-400 w-28"></span>
        </div>
        {/* form */}
        <form className="w-full mx-12" onSubmit={handleSubmit}>
          <input
            className="w-full p-2 border rounded mb-3 text-sm bg-gray-50"
            type="text"
            placeholder="Mobile number or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full p-2 border rounded mb-3 text-sm bg-gray-50"
            type="text"
            placeholder="Full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            className="w-full p-2 border rounded mb-3 text-sm bg-gray-50"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            className="w-full p-2 border rounded mb-3 text-sm bg-gray-50"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
          />

          {err && err.response && err.response.data.error.code === 11000 && (
            <div className="text-red-500 mt-2">
              Username and email should be unique.
            </div>
          )}
          {err !== "" && <h4 className="text-red-400">{err}</h4>}
          {loading ? (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-75">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
            </div>
          ) : (
            ""
          )}
          <p className="text-xs text-center my-2">
            People who use our service may have uploaded your contact
            information to Instagram.{" "}
            <span className="text-blue-500"> Learn More</span>
          </p>
          <p className="text-xs text-center my-2">
            By signing up, you agree to our{" "}
            <span className="text-blue-500">Terms , Privacy Policy</span> and
            <span className="text-blue-500"> Cookies Policy .</span>
          </p>
          <button
            className="w-full bg-blue-400 hover:bg-blue-600 text-white p-2  rounded-xl text-base"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>

      {/*  have an account section  */}
      <div className="text-center border-2 border-slate-300 p-4 text-sm">
        Have an account?
        <Link to="/login">
          <span className="font-bold text-blue-500 cursor-pointer">
            {" "}
            Log in{" "}
          </span>
        </Link>
      </div>

      {/* get the app section */}
      <div className="text-center">
        <p className="my-2 text-sm">Get the app</p>

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

export default Signup;
