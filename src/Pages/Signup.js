import React from "react";
import instaLogo from "../Images/Logo-Instagram-1.png";
import facebookLogo from "../Images/facebook-logo-clipart-hd-10.jpg";
import playStoreLogo from "../Images/google-play-badge.png";
import microsoftLogo from "../Images/microsoft.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex flex-col max-w-[350px] mx-auto justify-center content-center  space-y-4  mt-3 w-full">
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
           
            <img className="w-7 h-7 p-1 mr-2" src={facebookLogo} alt="Facebook" />
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
        <form className="w-full mx-12">
          <input
            className="w-full p-2 border rounded mb-3 text-sm bg-gray-50"
            type="text"
            placeholder="Mobile number or Email"
          />
          <input
            className="w-full p-2 border rounded mb-3 text-sm bg-gray-50"
            type="text"
            placeholder="Full name"
          />
          <input
            className="w-full p-2 border rounded mb-3 text-sm bg-gray-50"
            type="text"
            placeholder="Username"
          />
          <input
            className="w-full p-2 border rounded mb-3 text-sm bg-gray-50"
            type="password"
            placeholder="Password"
          />
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
        <span className="font-bold text-blue-500 cursor-pointer"> Log in </span>
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
