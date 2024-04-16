import React from "react";
import "./comments.css";
import { users } from "../../../data/user";

const Comments = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="comments">
      <div className="comments-header">
        <h3>Comments</h3>
        <p>Share your opinion or feedback</p>
      </div>

      <form className="comments-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your name ... e.g. John Doe" />
        <input
          type="email"
          placeholder="Your email ... e.g. johndoe@gmail.com"
        />
        <textarea placeholder="Write your comment right here ..."></textarea>
        <button type="submit" className="comment-btn">
          Submit
        </button>
      </form>

      <div className="user-comments-container">
        {users.map((item) => (
          <div key={item.id} className="user-comments-box">
            <img
              src={item.image}
              alt={item.title}
              className="user-comments-image"
            />
            <h5 className="user-comments-name">{item.name}</h5>
            <p className="user-comments-comment">{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
