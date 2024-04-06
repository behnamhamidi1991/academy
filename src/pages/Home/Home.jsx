import React from "react";
import User from "../../components/Home/Users/User";
import Featured from "../../components/Home/Featured/Featured";
import Courses from "../../components/Home/Courses/Courses";

const Home = () => {
  return (
    <div>
      <User />
      <Featured />
      <Courses />
    </div>
  );
};

export default Home;
