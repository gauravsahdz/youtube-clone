import "./Header.css";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <div className="header">
      <MenuIcon className="menu icon" />
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png"
          className="yt_logo"
        />
        <span className="yt_tag">YouTube</span>
      </div>

      <div className="searchingBox">
        <input className="search_box" type="text" placeholder="Search" />
        <SearchIcon className="search_Icon" />
        <MicIcon className="mic icon" />
      </div>

      <div className="header_right">
        <AppsIcon className="icon" />
        <NotificationsIcon className="icon" />
        <AccountCircleIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
