"use client";

import React, { useEffect, useState } from "react";

// Components
import BlogList from "./components/BlogList.jsx";

// Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Actions
import { setBlogs } from "./slices/blog.slice.js";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const dispatch = useDispatch();

  const getBlogs = async () => {
    const response = await fetch(
      `http://localhost:8000/api/blog?page=${currentPage}&sort=oldest`,
      {
        credentials: "include",
      }
    );
    const data = await response.json();

    dispatch(setBlogs(data.blogs));
    setTotalPages(data.pages);
  };

  useEffect(() => {
    getBlogs();
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="mt-10 ">
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight">From the blog</h2>
        <p className="text-gray-600 leading-loose text-lg mt-2">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <BlogList />
      {/* Pagination */}
      <div className="flex gap-2 mt-10 mb-5">
        {currentPage !== 1 && (
          <button
            onClick={prevPage}
            className="border uppercase  p-2 rounded-md bg-indigo-500 text-white"
          >
            prev
          </button>
        )}
        {currentPage !== totalPages && (
          <button
            onClick={nextPage}
            className="border uppercase p-2 rounded-md bg-indigo-500 text-white"
          >
            next
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
