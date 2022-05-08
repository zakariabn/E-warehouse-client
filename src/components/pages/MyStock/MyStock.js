import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useGetStockWithEmail from '../../../hooks/useGetStockWithEmail';

const MyStock = () => {

  const [user] = useAuthState(auth);

  const [stocks] = useGetStockWithEmail(user?.email);
  return (
    <div>
      
    </div>
  );
};

export default MyStock;