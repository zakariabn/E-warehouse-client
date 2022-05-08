import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useGetStockWithEmail from "../../../hooks/useGetStockWithEmail";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import SingleStock from "../Inventory/SingleStock";

const MyStock = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [stock, setStock] = useGetStockWithEmail(user?.email);

  let counter = 1;
  function handelStockDelete(id) {
    const isReady = window.confirm(" Are you sure you want to delete");

    if (isReady) {
      const url = `http://localhost:5000/stock/${id}`;
      axios.delete(url).then((response) => {
        if (response.data.deletedCount === 1) {
          const remaining = stock.filter((stock) => stock._id !== id);
          setStock(remaining);
        }
      });
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center mb-5">
      <div className="max-w-screen-2xl inventory-table my-10">
        <table>
          <tr>
            <th>
              <p className="text-xl font-semibold ">ID</p>
            </th>
            <th className="hidden md:flex">
              <p className="text-xl font-semibold ">Image</p>
            </th>
            <th>
              <p className="text-xl font-semibold ">Name</p>
            </th>
            <th>
              <p className="text-xl font-semibold ">Supplier</p>
            </th>
            <th>
              <p className="text-xl font-semibold ">Price</p>
            </th>
            <th>
              <p className="text-xl font-semibold ">Quantity</p>
            </th>
            <th className="md: hidden lg:block">
              <div className="text-xl font-semibold flex gap-x-2">
                <p>Buttons</p>
              </div>
            </th>
          </tr>

          {stock?.map((stock) => {
            return (
              <SingleStock
                key={stock._id}
                stock={stock}
                DemoId={counter++}
                handelStockDelete={handelStockDelete}></SingleStock>
            );
          })}
        </table>
      </div>

      {/* <button className="bg-dark_gray text-white font-semibold px-4 py-2 rounded-sm hover:bg-primary duration-100 hover:shadow-[1px_2px_2px_gray] active:translate-y-[2px] active:shadow-none" onClick={() => navigate('/add-stock')}>
        Add New Stock
      </button> */}
    </div>
  );
};

export default MyStock;
