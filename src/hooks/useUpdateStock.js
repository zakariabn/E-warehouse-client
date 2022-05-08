import axios from "axios";
import { useEffect, useState } from "react";

function useUpdateStock(id, updateKey) {
  const [stockInfo, setStockInfo] = useState({});

  useEffect(() => {
    async function getStock() {
      await axios
        .get(`http://localhost:5000/stock/${id}`)
        .then((response) => setStockInfo(response.data))
        .catch((error) => console.dir(error));
    }
    getStock();
  }, [id]);

  


  useEffect(() => {
    async function updateQuantity() {
      await axios
        .post(`http://localhost:5000/stock/${id}`, { updateKey })
        .then((res) => {
          if (res.data.acknowledged) {
            // setStock(res.data);
          }
        });
    }
    updateQuantity();
  }, [updateKey, id]);
}
