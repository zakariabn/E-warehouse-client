import { useEffect, useState } from "react";

function useGetStock (limit = '', email = '') {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    fetch (`https://e-warehouse.herokuapp.com/stock?limit=${limit}`)
      .then (res => res.json())
      .then (data => setStock(data))
      .catch (error => console.dir(error));
  }, [limit])
  return[stock, setStock];  
}

export default useGetStock;