import React from "react";
import Loader from "cssonly-loaders-react";

const LoadingSpinner = (props) => {
  return (
    <div className="w-full h-full flex justify-center items-center my-5">
      <Loader
        type="hour-glass"
        size={40}
        color="white"
        line={5}
        secondaryColor="#5830B6"
        duration={0.5}></Loader>
    </div>
  );
};

export default LoadingSpinner;
