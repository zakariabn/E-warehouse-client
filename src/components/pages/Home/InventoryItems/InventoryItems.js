import React from "react";
import useGetStock from "../../../../hooks/useGetStock";
import StockInfoCard from "../../../Shared/StockInfoCard/StockInfoCard";

const InventoryItems = () => {
  const [stock] = useGetStock(6);
  

  return (
    <div className="my-5 overflow-hidden max-w-screen-lg">
      <h2 className="text-center font-bold text-3xl mt-6 mb-10">Inventory Items</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {
          stock.map(item => {
            return (
              <StockInfoCard 
                key={item._id}
                stockInfo={item}>
              </StockInfoCard>
            )
          })
        }
      </div>
    </div>
  );
};

export default InventoryItems;