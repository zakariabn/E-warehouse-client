import React from "react";
import { useNavigate } from "react-router-dom";
import './Blogs.css'

const Blog = (props) => {
  const { id, title, bodyText, img } = props;
  const navigate = useNavigate();

  const BlogCover = {
    backgroundImage: `
    linear-gradient(
      to bottom, 
      rgba(32, 40, 119, 0.14),
      rgba(55, 46, 149, 0.45)
    ),
      url(${img})`,
  };

  return (
    <div
      style={BlogCover}
      className={`w-[250px] h-[300px] flex justify-center items-center bg-red-50 bg-center bg-cover border`}>
      <div className="text-center">
        <div className="shadow-shade p-2">
          <h3 title={title} className="font-medium text-3xl text-white">
            {title?.length > 40 ? title.slice(0, 40) + "..." : title}
          </h3>
        </div>
        <button
          className={`text-orange bg-white px-3 font-bold rounded-full mt-5 shadow-sm`}
          onClick={() => navigate(`/read-blog/${id}`)}>
          See More
        </button>
      </div>
    </div>
  );
};

export default Blog;
