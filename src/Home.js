import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import VideosContainer from "./VideosContainer";

function Home() {
  return (
    <div className="home">
      <Header />
      <Navbar />
      <VideosContainer />
    </div>
  );
}

export default Home;
