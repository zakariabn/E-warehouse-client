import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();


  return (
    <div className='w-full flex flex-col justify-center items-center h-[60vh]'>
      <h1 className='text-4xl font-bold text-center'>Page not found</h1>
      <h1 className='text-3xl font-bold text-center text-orange mb-10'>404</h1>
      <button 
        className='bg-orange px-5 py-1 text-white font-medium rounded-sm hover:bg-primary duration-150'
        onClick={() => navigate('/', {replace: true})}
      >GO Back</button>
    </div>
  );
};

export default PageNotFound;