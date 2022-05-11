import axios from "axios";
import React, { useEffect, useState } from "react";
import useGetStock from "../../../../hooks/useGetStock";

const TopSelling = () => {
  const [bestSellingStock, setBestSellingStock] = useState([]);

  useEffect(() => {
    async function getBestSellerStock() {
      try {
        await axios
          .get(`http://localhost:5000/stock/best-seller?limit=${3}`)
          .then((res) => setBestSellingStock(res?.data));
      } catch (error) {
        console.log(error);
      }
    }
    getBestSellerStock();
  }, []);

  console.log(bestSellingStock);
  return (
    
      <div className="w-full py-20 max-w-screen-lg w-full flex  flex-col items-center  bg-slate-100">
        <h1 className=" text-4xl font-bold text-center mb-10">
          Best <span className="text-orange">selling</span> items
        </h1>
        <div className="flex flex-col md:flex-row  gap-4">
          {bestSellingStock?.map((stock) => {
            const { name, sold, img } = stock;
            return (
              <div className="bg-stone-200 p-2 flex flex-col items-center relative">
                <span className="absolute top-[-12px] right-[-12px] bg-orange w-[30px] h-[30px] rounded-[5rem_0_5rem_0] font-bold text-white">
                  Hot
                </span>

                <div className="w-[150px] h-[150px] flex justify-center overflow-hidden rounded-full mb-5">
                  <img src={img} alt="" className=" h-" />
                </div>
                <h3 title={name} className="text-lg font-medium mb-4">
                  {name.length > 20 ? name.slice(0, 20) + " ..." : name}
                </h3>
                <h2 className="text-lg font-bold">
                  <span className="text-orange">{sold}</span>
                </h2>
                <h2 className="text-lg font-medium"> ITEM SOLD</h2>
              </div>
            );
          })}
        </div>
      </div>
    
  );
};

export default TopSelling;
