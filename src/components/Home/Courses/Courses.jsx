import React, { useEffect, useState } from "react";
import "./courses.css";
import { courses } from "../../../data/courses";
import { FaShoppingCart } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Courses = () => {
  const [displayCourses, setDisplayCourses] = useState([]);
  const [courseCount, setCourseCount] = useState(8);

  useEffect(() => {
    setDisplayCourses(courses.slice(0, courseCount));
  }, [courseCount]);

  const loadMoreCourses = () => {
    setCourseCount((prevCount) => prevCount + 8);
  };

  return (
    <div className="courses">
      <div className="courses-header">
        <h2>Courses</h2>
        <p>Our featured courses based on highest rate</p>
      </div>

      <div className="coursesWrapper">
        <div className="courses-container">
          {displayCourses.map((item) => (
            <div key={item.id} className="courses-box">
              <div className="courses-box-image-container">
                <img
                  src={item.image}
                  alt={item.title}
                  className="courses-box-image"
                />
              </div>

              <div className="courses-box-content">
                <h3>{item.title}</h3>
                <p className="courses-box-content-description">
                  {item.description.substring(0, 219)} ...
                </p>
                <div className="course-box-content-details">
                  <span>$ {item.price}</span>
                  <span># {item.category}</span>
                  <span>
                    <PiStudentFill /> {item.students} students
                  </span>
                </div>
                <div className="courses-btnContainer">
                  <Link to={`/courses/${item.id}`} className="courses-readBtn">
                    Read More
                  </Link>
                  <button className="courses-buyBtn">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {displayCourses.length === courses.length ? null : (
          <button className="moreCourses" onClick={loadMoreCourses}>
            Load More Courses
          </button>
        )}
      </div>
    </div>
  );
};

export default Courses;
