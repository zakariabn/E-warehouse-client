import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const DetailsCard = ({stockDetails, handelUpdateStock, stockQuantity, totalSold}) => {
  const { _id, name, img,  price, supplier_name } = stockDetails;
  
  const [formState, setFormState] = useState(false);
  

  // toggling update quantity form
  function popupFormToggle() {
    setFormState(!formState);
  }

  return (
    <>
      <div className="bg-slate-200 lg:w-[700px]">
        <h4 className="bg-primary">
          Product ID: <span>{_id}</span>
        </h4>
        <div className="flex flex-col lg:flex-row lg:gap-10">
          <div className=" flex flex-col items-center p-3 w-[350px]">
            <h3 className="max-w-[300px]">{name}</h3>
            <img src={img} alt="" className="h-[300px]" />
          </div>

          <div className="w-[350px] flex flex-col items-center lg:block mt-20">
            <div className="mb-10">
              <p>Price: {price}</p>
              <p>Supplier: {supplier_name}</p>
            </div>

            <div>
              <p>Sold: {totalSold}</p>
              <p>Current Stock: {stockQuantity}</p>
              <button
                className="mt-4 bg-primary px-3 py-2 rounded-md font-medium text-white mb-6"
                onClick={popupFormToggle}>
                Update stock
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          formState ? "absolute" : "hidden"
        } top-0 left-0  translate-x-[45vw] translate-y-[40vh] lg:translate-y-[30vh] bg-white p-3`}>
        <button
          className="absolute top-0 right-1 text-primary hover:text-orange"
          onClick={popupFormToggle}>
          <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
        </button>
        <form className=" p-2" onSubmit={handelUpdateStock}>
          <div className="flex items-center gap-1 mb-3">
            <label htmlFor="current-stock" className="font-medium">
              Current Stock:{" "}
            </label>
            <input
              type="text"
              name=""
              value={stockQuantity}
              id="current-stock"
              className="border border-orange focus:outline-none h-[30px] w-[60px] px-3 ml-2 rounded-md"
            />
          </div>
          <div className="flex items-center gap-1 mb-3">
            <label htmlFor="current-stock" className="font-medium">
              Add Stock:{" "}
            </label>
            <input
              type="text"
              name="add_stock"
              id="current-stock"
              className="border border-orange focus:outline-none h-[30px] w-[60px] px-3 ml-2 rounded-md"
            />
          </div>

          <div className="flex justify-center">
            <input
              type="submit"
              value="Update Stock"
              className="bg-primary px-3 p-1 rounded-sm text-white font-medium hover:bg-green-300 hover:cursor-pointer hover:text-black duration-200"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default DetailsCard;
