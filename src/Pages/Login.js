import React from "react";
import instaLogo from "../Images/Logo-Instagram-1.png";
import facebookLogo from "../Images/fb.png";
import playStoreLogo from "../Images/google-play-badge.png";
import microsoftLogo from "../Images/microsoft.png";

const Login = () => {
  return (
    <div className="flex flex-col max-w-sm mx-auto justify-center content-center  space-y-4  mt-3 w-full">
      <div className="border-2 border-slate-300 p-4 flex flex-col items-center py-2 px-14 ">
        <img className="w-44 h-24 mb-2" src={instaLogo} alt="" />
        <form className="w-full mx-12">
          <input
            className="w-full p-2 border rounded mb-3 text-sm"
            type="text"
            placeholder="Phone number, username, or email"
          />
          <input
            className="w-full p-2 border rounded mb-3 text-sm"
            type="password"
            placeholder="Password"
          />
          <button
            className="w-full bg-blue-400 hover:bg-blue-600 text-white p-2  rounded-xl text-base"
            type="submit"
          >
            Log in
          </button>
        </form>
        <div className="flex items-center justify-center w-full mt-4">
          <span className="border-t border-gray-400 w-28"></span>
          <p className="mx-2 text-gray-600 text-sm">OR</p>
          <span className="border-t border-gray-400 w-28"></span>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <img className="w-4 h-4" src={facebookLogo} alt="Facebook" />
          <p className="text-blue-800 text-sm">Login with Facebook</p>
        </div>
        <div>
          <p className="text-blue-500 text-xs my-4">Forgot password</p>
        </div>
      </div>
      <div className="text-center border-2 border-slate-300 p-4 text-sm">
        Don't have an account?{" "}
        <span className="font-bold text-blue-500 cursor-pointer">Sign Up</span>
      </div>
      <div className="text-center">
        <p className="my-2 text-sm">Get the app</p>

        <div className="flex justify-center space-x-2 content-center">
          <img className="max-w-full h-16" src={playStoreLogo} alt="Playstore" />
          <img className="max-w-full h-11 mt-2" src={microsoftLogo} alt="Microsoft" />
        </div>
      </div>
    </div>
  );
};

export default Login;
