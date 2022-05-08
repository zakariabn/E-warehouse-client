import React from "react";
import { useNavigate } from "react-router-dom";

const SingleStock = ({ stock, DemoId, handelStockDelete }) => {
  const {_id, name, img, price, quantity, supplier_name } = stock;
  const navigate = useNavigate();

  return (
    <tr>
      <td><p>{DemoId}</p></td>
      <td className="hidden md:flex"><img src={img} alt="" className="w-[80px] h-[100px]" /></td>
      <td><p title={name}>{name.length > 20 ? name.slice(0, 20) + "...." : name}</p></td>
      <td><p>{supplier_name}</p></td>
      <td><p>{price[0] + ' ' + price[1]}</p></td>
      <td><p>{quantity}</p></td>
      <td>
        <div className="flex gap-x-2 hidden lg:flex" >
          <button 
          className="font-semibold" onClick={() => navigate(`/stock-details/${_id}`)}>Edit</button>
          <button className="font-semibold" onClick={() => handelStockDelete(_id)}>Delete</button>
        </div>
      </td>
    </tr>
  );
};

export default SingleStock;
