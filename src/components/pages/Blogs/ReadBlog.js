import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    async function getBlog() {
      await axios
        .get(`https://e-warehouse.herokuapp.com/${id}`)
        .then((res) => setBlog(res.data));
    }
    getBlog();
  }, [id]);

  const {img, title, textBody} = blog;

  return (
    <div>
      <h1>This is title</h1>
      <p>
        this is body tex Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Deserunt, eos suscipit quia veritatis iure eveniet ipsum optio eum
        officia alias corrupti? Eaque sed velit aliquam magnam exercitationem
        eius repellendus molestias!
      </p>
    </div>
  );
};

export default ReadBlog;
