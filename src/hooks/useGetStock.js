import { useEffect, useState } from "react";

function useGetStock (limit = '') {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    fetch (`http://localhost:5000/stock?limit=${limit}`)
      .then (res => res.json())
      .then (data => setStock(data))
      .catch (error => console.dir(error));
  }, [limit])
  return[stock, setStock];  
}

export default useGetStock;