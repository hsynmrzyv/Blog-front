import React from "react";

// Components
import BlogItem from "./BlogItem";

// Redux Hooks
import { useSelector } from "react-redux";

const BlogList = () => {
  const blogs = useSelector((state) => state.blog.blog);

  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-8 mt-16">
      {blogs.map((blog) => {
        return <BlogItem key={blog._id} blog={blog} />;
      })}
    </div>
  );
};

export default BlogList;
