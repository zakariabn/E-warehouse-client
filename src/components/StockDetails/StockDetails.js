import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StockInfoCard from "../Shared/StockInfoCard/StockInfoCard";

const StockDetails = () => {
  const { id } = useParams();
  const [stock, setStock] = useState();
  console.log(stock);

  useEffect(() => {
    const url = `http://localhost:5000/stock/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setStock(data))
      .catch((error) => console.dir(error));
  }, [id]);

  return (
    <div>
      <p>{stock?.name}</p>
    </div>
  );
};

export default StockDetails;
