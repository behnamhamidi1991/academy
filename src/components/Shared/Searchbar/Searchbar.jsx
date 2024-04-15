import React, { useState } from "react";
import "./searchbar.css";
import { courses } from "../../../data/courses";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  // Event handler for search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter courses based on the search term
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="searchBarWrapper">
      <form className="header-search-form">
        <input
          type="text"
          placeholder="Search ..."
          className="header-search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="header-search-btn" type="button">
          Search
        </button>
      </form>
      {searchTerm && filteredCourses.length > 0 && (
        <div className="searchBarResult">
          {filteredCourses.map((course) => (
            <Link to="/" key={course.id} className="searchBarBox">
              <img src={course.image} alt={course.title} />
              <div>{course.title}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default Searchbar;
