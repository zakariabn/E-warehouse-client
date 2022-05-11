import { useEffect, useState } from 'react';

function useGetStockWithEmail (email) {
  const [stock, setStock] = useState([]);

  useEffect(() => {
    fetch (`http://localhost:5000/stock?email=${email}`)
      .then (res => res.json())
      .then (data => setStock(data))
      .catch (error => console.dir(error));
  }, [email])
  return[stock, setStock];  
}

export default useGetStockWithEmail;