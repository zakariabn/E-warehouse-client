import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import DetailsCard from "./DetailsCard";
export const StockQuantityContext = createContext("quantity");

const StockDetails = () => {
  const { id } = useParams();
  const [stock, setStock] = useState({});
  const [stockQuantity, setStockQuantity] = useState(0);
  const [totalSold, setTotalSold] = useState(0);

  // fetching data for this id
  useEffect(() => {
    const url = `https://localhost:5000/stock/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setStock(data);
        setStockQuantity(parseInt(data?.quantity));
        setTotalSold(parseInt(data?.sold));
      })
      .catch((error) => console.dir(error));
  }, [id]);

  // handling update stock
  function updateSockHandel(e) {
    e.preventDefault();
    const currentStock = parseInt(stockQuantity);
    const newAddedStock = parseInt(e.target.add_stock.value);

    const intChecker = /^[0-9]+$/;
    if (intChecker.test(newAddedStock)) {
      const updatedStock = currentStock + newAddedStock;
      setStockQuantity(updatedStock);
      toast.success("Stock updated");
      e.target.add_stock.value = "";
    } else {
      alert("wrong input");
    }
  }

  // handling delivery and updating sold count
  function handelDelivered() {
    if (stockQuantity >= 1 ) {
      setStockQuantity(stockQuantity - 1);    
      toast.success("Successfully Delivered");
      const newSoldCount = parseInt(totalSold) + 1;
      setTotalSold(newSoldCount);
    }
    else {
      toast.warn("Stock out")
    }

  }

  useEffect(() => {
    async function updateQuantity() {
      const quantity = stockQuantity;
      const soldCount = totalSold;

      await axios
        .put(`https://localhost:5000/stock/${id}`, { quantity, soldCount })
        .then((res) => {
          if (res.data.acknowledged) {
            // setStock(res.data);
          }
        });
    }
    updateQuantity();
  }, [stockQuantity, totalSold, id]);

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <DetailsCard
        stockDetails={stock}
        stockQuantity={stockQuantity}
        totalSold={totalSold}
        handelUpdateStock={updateSockHandel}></DetailsCard>

      <button
        className="bg-orange px-3 p-1 rounded-sm text-white font-medium hover:bg-green-300 hover:cursor-pointer hover:text-black duration-200 mt-10"
        onClick={handelDelivered}>
        delivered
      </button>
    </div>
  );
};

export default StockDetails;
