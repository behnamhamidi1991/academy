import React from "react";
import User from "../../components/Home/Users/User";
import Featured from "../../components/Home/Featured/Featured";
import Courses from "../../components/Home/Courses/Courses";
import Blog from "../../components/Home/Blog/Blog";

const Home = () => {
  return (
    <div>
      <User />
      <Featured />
      <Courses />
      <Blog />
    </div>
  );
};

export default Home;
