import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = (props) => {
  const { title, bodyText, img } = props;
  const navigate = useNavigate();


  const BlogCover = {
    backgroundImage: `
    linear-gradient(
      to bottom, 
      rgba(32, 40, 119, 0.34),
      rgba(55, 46, 149, 0.65),
      rgba(96, 58, 201, 0.82)
    ),
      url(${img})`,
  };

  return (
    <div
      style={BlogCover}
      className={`w-[250px] h-[300px] flex justify-center items-center bg-red-50 bg-center bg-cover  border`}>
      <div className="text-center">
        <h3 title={title} className="font-medium text-4xl text-white">
          {title?.length > 15 ? title.slice(0, 15) + ".." : title}
        </h3>
        <p className="text-lg text-dark_gray font-medium">
          {bodyText?.length > 15 ? bodyText.slice(0, 15) + " ..." : bodyText}
        </p>
        <button
          className={`text-orange bg-white px-3 font-bold rounded-full mt-5`}
          onClick={() => navigate('/read-blog/1')}
          >
          See More
        </button>
      </div>
    </div>
  );
};

export default Blog;
