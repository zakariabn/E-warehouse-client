import axios from "axios";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const demoImg = "https://g.foolcdn.com/art/companylogos/square/mdb.png";
  const title = "This is title this is title";
  const bodyText =
    "lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume ";

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      await axios
        .get(`https://e-warehouse.herokuapp.com/blog`)
        .then((res) => setBlogs(res.data));
    }
    getBlogs();
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Blogs page</h1>
      <div className="flex justify-center gap-5 my-10">
        {blogs?.map((blog) => {
          const {_id, img, title, blogText } = blog;
          return <Blog img={img} title={title} bodyText={blogText} id={_id}></Blog>;
        })}
      </div>
    </div>
  );
};

export default Blogs;
