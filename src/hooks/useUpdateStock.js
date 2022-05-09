import axios from "axios";
import { useEffect, useState } from "react";

function useUpdateStock(id, updateKey) {
  const [stockInfo, setStockInfo] = useState({});

  useEffect(() => {
    async function getStock() {
      await axios
        .get(`https://e-warehouse.herokuapp.com/stock/${id}`)
        .then((response) => setStockInfo(response.data))
        .catch((error) => console.dir(error));
    }
    getStock();
  }, [id]);

  


  useEffect(() => {
    async function updateQuantity() {
      await axios
        .post(`https://e-warehouse.herokuapp.com/stock/${id}`, { updateKey })
        .then((res) => {
          if (res.data.acknowledged) {
            // setStock(res.data);
          }
        });
    }
    updateQuantity();
  }, [updateKey, id]);
}
