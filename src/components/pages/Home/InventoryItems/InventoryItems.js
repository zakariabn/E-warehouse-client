import React from "react";
import { useNavigate } from "react-router-dom";
import useGetStock from "../../../../hooks/useGetStock";
import LoadingSpinner from "../../../Shared/LoadingSpinner/LoadingSpinner";
import StockInfoCard from "../../../Shared/StockInfoCard/StockInfoCard";

const InventoryItems = () => {
  const [stock] = useGetStock(6);
  const navigate = useNavigate();

  return (
    <div className="my-5 max-w-screen-lg">
      <h2 className="text-center font-bold text-3xl mt-6 mb-10">
        Inventory Items
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {stock.length > 0 ? (
          <>
            {stock.map((item) => {
              return (
                <StockInfoCard key={item._id} stockInfo={item}></StockInfoCard>
              );
            })}
          </>
        ) : (
          <LoadingSpinner></LoadingSpinner>
        )}
      </div>
      <div className="flex justify-center">
        <button className="bg-orange px-14 p-2  rounded-full text-white font-medium hover:bg-purple-dark hover:text-white hover:cursor-pointer duration-200 mt-10" onClick={() => navigate('/inventory')}>
          See more
        </button>
      </div>
    </div>
  );
};

export default InventoryItems;
