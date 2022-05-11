import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    async function getBlog() {
      await axios
        .get(`http://localhost:5000/blog/${id}`)
        .then((res) => setBlog(res.data));
    }
    getBlog();
  }, [id]);

  const { img, title, blogText } = blog;

  return (
    <div className="flex flex-col items-center justify-center my-20 ">
      <div className="max-w-screen-lg px-4">
        <h1 className="font-bold text-3xl text-center mb-4">{title}</h1>
        <p>{blogText}</p>
      </div>
    </div>
  );
};

export default ReadBlog;
