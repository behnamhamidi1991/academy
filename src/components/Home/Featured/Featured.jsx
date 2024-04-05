import React from "react";
import "./featured.css";
import { courses } from "../../../data/courses";

const Featured = () => {
  const selectedIds = [8, 21, 15, 13, 12, 5];
  const filteredCourses = courses
    .filter((item) => selectedIds.includes(Number(item.id)))
    .sort(
      (a, b) =>
        selectedIds.indexOf(Number(a.id)) - selectedIds.indexOf(Number(b.id))
    );

  return (
    <div className="featured">
      {filteredCourses.map((item) => (
        <div key={item.id} className="featured-box">
          <img src={item.image} alt="" />

          <div className="featured-content">
            <h2>{item.title}</h2>
            <p>{item.description.substring(0, 199)} ...</p>
            <button className="featured-read-btn">Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
