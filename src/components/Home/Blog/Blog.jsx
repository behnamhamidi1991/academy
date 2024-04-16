import React from "react";
import "./blog.css";
import { blogPosts } from "../../../data/blog";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-posts">
      <div className="blog-posts-header">
        <h2>Blog</h2>
        <p>Read our latest and newest topics right here ...</p>
      </div>
      <div className="blog-posts-container">
        {blogPosts.map((item) => (
          <div key={item.id} className="blog-post-box">
            <div className="blog-post-content">
              <h3>{item.title}</h3>
              <p>{item.text.substring(0, 299)} ...</p>
            </div>
            <div className="blog-post-details">
              <div className="blogView">Views: {item.view}</div>
              <div className="blogComments">Comments: {item.comments}</div>
              <div className="blogDate">Date: {item.date}</div>
              <div className="blogCategory">Category: {item.category}</div>
              <div className="blogAuthor">Author: {item.author}</div>
              <img
                src={item.authorImage}
                alt=""
                className="blog-author-image"
              />
            </div>
            <Link to="/" className="blog-post-readMore">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
