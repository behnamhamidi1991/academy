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
          <div className="featured-item">
            <img src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
