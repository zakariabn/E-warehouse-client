import React from 'react';
import Banner from './Banner/Banner';
import Inventory from '../Inventory/Inventory';
import InventoryItems from './InventoryItems/InventoryItems';
import TopSelling from './TopSelling/TopSelling';

const Home = () => {
  return (
    <div className='flex flex-col items-center'>
      <Banner></Banner>
      <InventoryItems></InventoryItems>
      <TopSelling></TopSelling>
    </div>
  );
};

export default Home;