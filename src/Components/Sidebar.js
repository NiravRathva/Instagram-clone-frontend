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
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { logout } from "../Store/userSlice";
import { useDispatch } from "react-redux";
const Sidebar = ({ toggleDarkMode, isDarkMode, setOpenCreatePost }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const dispatch = useDispatch();
  return (
    <div className="  flex flex-col justify-center items-center">
      {/* logo  */}
      <div className="mt-5 ">
        <img
          className={` h-16 w-24 ${isDarkMode ? "filter invert" : ""}`}
          src={instaLogo}
          alt="Instagram"
        />
      </div>
      {/* Links  */}
      <div>
        <ul className="p-4">
          <li
            className={` p-3  ${
              isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-300"
            } rounded-md my-1`}
          >
            <Link to="/">
              <HomeIcon fontSize="medium" className="mr-4" /> Home
            </Link>
          </li>
          <li
            className={` p-3  ${
              isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-300"
            } rounded-md my-1`}
          >
            <Link >
              <SearchIcon fontSize="medium" className="mr-4" />
              Search
            </Link>
          </li>
          <li
            className={` p-3  ${
              isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-300"
            } rounded-md my-1`}
          >
            <Link to="/explore">
              <ExploreIcon fontSize="medium" className="mr-4" />
              Explore
            </Link>
          </li>
          <li
            className={` p-3 ${
              isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-300"
            } rounded-md my-1`}
          >
            <Link >
              <VideoLibraryIcon fontSize="medium" className="mr-4" />
              Reels
            </Link>
          </li>
          <li
            className={` p-3 ${
              isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-300"
            } rounded-md my-1`}
          >
            <Link to="/messages">
              <MessageIcon fontSize="medium" className="mr-4" />
              Messages
            </Link>
          </li>
          <li
            className={` p-3 ${
              isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-300"
            } rounded-md my-1`}
          >
            <Link>
              <FavoriteBorderIcon fontSize="medium" className="mr-4" />
              Notification
            </Link>
          </li>
          <li
            className={` p-3 ${
              isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-300"
            } rounded-md my-1`}
          >
            <Link onClick={() => setOpenCreatePost(true)}>
              <AddCircleOutlineIcon fontSize="medium" className="mr-4" />
              Create
            </Link>
          </li>
          <li
            className={` p-3 ${
              isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-300"
            } rounded-md my-1`}
          >
            <Link to="/profile">
              <AccountCircleIcon fontSize="medium" className="mr-4" />
              Profile
            </Link>
          </li>
          <li
            className={`relative p-3 ${
              isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-300"
            } rounded-md my-1`}
          >
            <Link  onClick={toggleDropdown}>
              <MenuIcon fontSize="medium" className="mr-4" />
              More
            </Link>
            {/* more Dropdown  */}
            {isDropdownOpen && (
              <ul
                className={`mt-2 absolute right-0 bottom-full ${
                  isDarkMode ? "bg-black" : "bg-gray-100"
                } border border-gray-300 rounded-lg shadow-md`}
              >
                {isDarkMode ? (
                  <li
                    className={`p-3 ${
                      isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-300"
                    }`}
                  >
                    <button onClick={toggleDarkMode}>
                      <LightModeIcon /> Light Mode
                    </button>
                  </li>
                ) : (
                  <li
                    className={`p-3 ${
                      isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-300"
                    }`}
                  >
                    <Link onClick={toggleDarkMode}>
                      <DarkModeIcon /> Dark Mode
                    </Link>
                  </li>
                )}

                <li
                  className={`p-3 ${
                    isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-300"
                  }`}
                >
                  <Link to="#">
                    <SettingsIcon /> Settings
                  </Link>
                </li>
                <li
                  className={`p-3 ${
                    isDarkMode ? "hover:bg-gray-900" : "hover:bg-gray-300"
                  }`}
                >
                  <Link onClick={()=>dispatch(logout())}>
                    <LogoutIcon /> Log out
                  </Link>
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
