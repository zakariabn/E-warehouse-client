import React from "react";
import { useNavigate } from "react-router-dom";

const StockInfoCard = (props) => {
  const {
    _id,
    name,
    img,
    description,
    price,
    quantity,
    supplier_name,
  } = props?.stockInfo;
  const navigate = useNavigate();

  function handelUpdateStockClick(id) {
    console.log(id);
    navigate(`/stock-details/${id}`)

  }
  return (
    <div className="w-[400px] h-auto bg-slate-50 relative rounded-b-xl">
      <div className="p-4">
        <div className="flex justify-center items-center w-400px h-[250px] overflow-hidden">
          <img src={img} alt="" className="h-full" />
        </div>

        {/* price and stock */}
        <div>
          <p className="absolute right-0 top-0 
          text-white text-lg font-semibold 
          rounded-[0_0_0_2rem] bg-orange px-5 z-10">
            Sock: {quantity}
          </p>
          <p 
          className="absolute left-0 top-0 text-white 
          text-lg font-semibold rounded-[0_0_2rem_0] bg-orange px-5 z-10">
            Price: {`${price[0]} ${price[1]}`}
          </p>
        </div>

        {/* title and supplier */}
        <div className="mb-5">
          <h3 className="text-lg text-center font-medium mb-2">{name}</h3>
          <p className="text-lg inline-block px-3 rounded-[0_1rem_1rem_0]">
            Supplier: 
            <span className="ml-2 text-orange font-medium">
              {supplier_name || "Not available"}
            </span></p>
        </div>

        {/* product desc */}
        <div className="mb-10">
          <p className="text-primary font-medium text-xl mb-3 underline">Product Description:</p>
          <p className="ml-3">{description}</p>
        </div>

      </div>
        <button 
        className="w-full bg-primary absolute bottom-0 rounded-b-xl py-2 text-white text-lg font-semibold hover:bg-dark_orange"
        onClick={() => handelUpdateStockClick(_id)}
        >
          Update Stock
        </button>
    </div>
  );
};

export default StockInfoCard;
