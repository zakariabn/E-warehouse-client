import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import './Header.css'

const Header = () => {
  return (
    <div className="flex justify-center header-bg-gradient">
      <nav className="w-full max-w-screen-lg flex justify-between items-center px-4 font-medium">
        <h2 className="font-bold text-2xl text-white">E. Warehouse</h2>
        <div className="flex gap-x-3 div-style">
          <CustomLink to="/">
            <span className="flex flex-col">
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </span>
            <FontAwesomeIcon icon="fa-solid fa-shelves-empty" />
          </CustomLink>
          <CustomLink to="/inventory">
            <span className="flex flex-col">
              <FontAwesomeIcon icon={faWarehouse} />
              <span>Inventory</span>
            </span>
            </CustomLink>
        </div>
        <div className="flex gap-1">
          <CustomLink to="/login">Login</CustomLink>
          <CustomLink to="/sign-up">Sign up</CustomLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
