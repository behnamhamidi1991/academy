import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../../data/courses";
import "./singlecourse.css";

const SingleCourse = () => {
  const params = useParams();

  const id = params.id;

  const singleCourse = courses.find((item) => item.id === id);

  return (
    <div>
      <h1>{singleCourse.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        reiciendis ducimus provident nemo iusto, dolores reprehenderit
        accusamus, nisi quas tempora mollitia optio velit nostrum illum. Eveniet
        consectetur corporis at molestias?
      </p>
    </div>
  );
};

export default SingleCourse;
