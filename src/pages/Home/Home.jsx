import React from "react";
import User from "../../components/Home/Users/User";
import Featured from "../../components/Home/Featured/Featured";
import Courses from "../../components/Home/Courses/Courses";
import Blog from "../../components/Home/Blog/Blog";
import Countdown from "../../components/Shared/Countdown/Countdown";
import "./home.css";
import Searchbar from "../../components/Shared/Searchbar/Searchbar";

const Home = () => {
  return (
    <div>
      <div className="HomecountDownContainer">
        <Countdown />
      </div>
      <User />
      <Featured />
      <Courses />
      <Blog />
    </div>
  );
};

export default Home;
