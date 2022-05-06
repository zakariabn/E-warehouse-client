import React from "react";
// import bannerImg from '../../../../asset/images/unnamed.png';
import "./Banner.css";

const Banner = () => {
  return (
    <div className="hero-custom-bg hero-bg-gradient flex justify-center items-center text-white text-center">
      <div>
        <h1 className="text-4xl font-medium font-secondary-font mb-5">
          Product management system
        </h1>
        <p className="max-w-[500px] text-lg font-medium font-main-font">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim
          aspernatur consectetur hic repellat.
        </p>
        <button className="bg-white text-purple-600 font-bold mt-6 px-5 py-2 rounded-full hover:bg-transparent hover:text-white duration-150 border border-white">Inventory</button>
      </div>
    </div>
  );
};

export default Banner;
