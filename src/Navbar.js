import React from "react";
import "./Navbar.css";
import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="navIcon">
        <HomeIcon className="icon" />
        <span className="tag">Home</span>
      </div>

      <div className="navIcon">
        <ExploreIcon className="icon" />
        <span className="tag">Explore</span>
      </div>

      <div className="navIcon">
        <SubscriptionsIcon className="icon" />
        <span className="tag">Subscriptions</span>
      </div>

      <div className="navIcon">
        <VideoLibraryIcon className="icon" />
        <span className="tag">Library</span>
      </div>
    </div>
  );
}

export default Navbar;
