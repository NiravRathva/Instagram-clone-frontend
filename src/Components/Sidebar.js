import React, { useState } from "react";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsIcon from "@mui/icons-material/Settings";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import instaLogo from "../Images/Logo-Instagram-1.png";
const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="  flex flex-col justify-center items-center">
      {/* logo  */}
      <div className="mt-5 ">
        <img
          className="filter invert h-16 w-24 "
          src={instaLogo}
          alt="Instagram"
        />
      </div>
      {/* Links  */}
      <div>
        <ul className="p-4">
          <li className=" p-3  hover:bg-gray-900 rounded-md my-1">
            <a href="/">
              <HomeIcon fontSize="medium" className="mr-4" /> Home
            </a>
          </li>
          <li className=" p-3  hover:bg-gray-900 rounded-md my-1">
            <a href="/search">
              <SearchIcon fontSize="medium" className="mr-4" />
              Search
            </a>
          </li>
          <li className=" p-3  hover:bg-gray-900 rounded-md my-1">
            <a href="/explore">
              <ExploreIcon fontSize="medium" className="mr-4" />
              Explore
            </a>
          </li>
          <li className=" p-3 hover:bg-gray-900 rounded-md my-1">
            <a href="/reels">
              <VideoLibraryIcon fontSize="medium" className="mr-4" />
              Reels
            </a>
          </li>
          <li className=" p-3 hover:bg-gray-900 rounded-md my-1">
            <a href="/messages">
              <MessageIcon fontSize="medium" className="mr-4" />
              Messages
            </a>
          </li>
          <li className=" p-3 hover:bg-gray-900 rounded-md my-1">
            <a href="/notification">
              <FavoriteBorderIcon fontSize="medium" className="mr-4" />
              Notification
            </a>
          </li>
          <li className=" p-3 hover:bg-gray-900 rounded-md my-1">
            <a href="/create">
              <AddCircleOutlineIcon fontSize="medium" className="mr-4" />
              Create
            </a>
          </li>
          <li className=" p-3 hover:bg-gray-900 rounded-md my-1">
            <a href="/profile">
              <AccountCircleIcon fontSize="medium" className="mr-4" />
              Profile
            </a>
          </li>
          <li className="relative p-3 hover:bg-gray-900 rounded-md my-1">
            <a href="#" onClick={toggleDropdown}>
              <MenuIcon fontSize="medium" className="mr-4" />
              More
            </a>
            {/* more Dropdown  */}
            {isDropdownOpen && (
              <ul className="mt-2 absolute right-0 bottom-full bg-black border border-gray-300 rounded-lg shadow-md">
                <li className="p-3 hover:bg-gray-900">
                  <a href="#">
                    <LightModeIcon /> Light Mode
                  </a>
                </li>
                <li className="p-3 hover:bg-gray-900">
                  <a href="#">
                    <DarkModeIcon /> Dark Mode
                  </a>
                </li>
                <li className="p-3 hover:bg-gray-900">
                  <a href="#">
                    <SettingsIcon /> Settings
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
