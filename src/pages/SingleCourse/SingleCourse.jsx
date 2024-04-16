import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../../data/courses";
import "./singlecourse.css";
import Comments from "../../components/Shared/Comments/Comments";
import { PiStudentFill } from "react-icons/pi";
import { IoMdPricetags } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const SingleCourse = () => {
  // Get the item id
  const params = useParams();
  const id = params.id;

  // Find the course by id
  const singleCourse = courses.find((item) => item.id === id);

  // Eliminate the course your seeing
  const otherCourses = courses.filter((item) => item.id !== id);

  // Start the page from the top
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="single-course">
      <div className="singe-course-left">
        <div className="single-course-left-top">
          <div className="single-course-image-container">
            <img
              src={singleCourse.image}
              alt={singleCourse.title}
              className="single-course-image"
            />
          </div>
          <h1>{singleCourse.title}</h1>
          <p>{singleCourse.description}</p>
        </div>

        <div className="single-course-left-bottom">
          <Comments />
        </div>
      </div>
      <div className="single-course-left-wrapper">
        <div className="single-course-right">
          <div className="single-course-left-header">
            <p>You should take this course if:</p>
            <p>
              Lorem ipsum dolor sit amet . The graphic and typographic operators
              know this well, in reality all the professions dealing with the
              universe of communication have a stable relationship with these
              words, but what is it? Lorem ipsum is a dummy text without any
              sense. Lorem ipsum dolor sit amet . The graphic and typographic
              operators know this well, in reality all the professions dealing
              with the universe of communication have a stable relationship with
              these words, but what is it? Lorem ipsum is a dummy text without
              any sense.
            </p>
          </div>
          <div className="single-course-details">
            <div className="single-course-items">
              <IoMdPricetags className="single-course-icon" />
              <p>Price: {singleCourse.price}</p>
            </div>
            <div className="single-course-items">
              <FaStar className="single-course-icon" />
              <p>Rate: {singleCourse.rate}</p>
            </div>
            <div className="single-course-items">
              <PiStudentFill className="single-course-icon" />
              <p>Students: {singleCourse.students}</p>
            </div>
          </div>
          <div className="single-course-other-courses">
            {otherCourses.map((item) => (
              <Link
                to="/"
                key={item.id}
                className="single-course-other-courses-box"
              >
                <h4>{item.title}</h4>
                <p>{item.description.substring(0, 95)} ...</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
