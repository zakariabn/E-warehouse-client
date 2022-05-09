import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    async function getBlog() {
      await axios
        .get(`https://e-warehouse.herokuapp.com/blog/${id}`)
        .then((res) => setBlog(res.data));
    }
    getBlog();
  }, [id]);

  const {img, title, textBody} = blog;

  return (
    <div>
      <h1>{title}</h1>
      <p>
        {textBody}
      </p>
    </div>
  );
};

export default ReadBlog;
