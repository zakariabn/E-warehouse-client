import React, { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import placeHolderImg from "../../asset/images/user-account-img-placeholder.png";
import auth from "../../firebase.init";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const [userInfoBox, setUserInfoBox] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  
  function handelLogout() {
    signOut(auth);
    setUserInfoBox(false);
  }
  
  return (
    <div className="flex justify-center header-bg-gradient">
      <ToastContainer></ToastContainer>
      <nav className="w-full max-w-screen-lg flex justify-between items-center px-4 font-medium relative">
        <h2 className="font-bold text-2xl text-white">E. Warehouse</h2>
        <div className="flex items-center gap-x-3 div-style">
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

          {
            user && 
            <>
              <CustomLink to='/add-stock'>Add Stock</CustomLink>
            </>
          }
        </div>
        <div className="flex gap-1 relative">
          {!user ? (
            <>
              <CustomLink to="/login">Login</CustomLink>
              <CustomLink to="/sign-up">Sign up</CustomLink>
            </>
          ) : (
            <>
              <div
                className="flex flex-wrap justify-center items-center gap-2 hover:cursor-pointer"
                onClick={() => setUserInfoBox(!userInfoBox)}>
                <img
                  src={`${user?.photoURL || placeHolderImg}`}
                  alt=""
                  className="w-[40px] h-[40px]  rounded-full"
                />
              </div>
            </>
          )}
        </div>

        {/* user information popup box */}
        <div
          className={`absolute top-20 right-5 xl:right-[-140px] bg-slate-100 rounded-md p-2 flex flex-col items-center shadow-md ${
            userInfoBox ? "block" : "hidden"
          }`}>
          <img
            src={`${user?.photoURL || placeHolderImg}`}
            alt=""
            className="w-[60px] h-[60px] mt-6 mb-5 rounded-full shadow-[0_2px_3px_gray]"
          />
          <h4>{user?.displayName || "User"}</h4>
          <p title={user?.email}>{user?.email.length > 30 ?  user?.email.slice(0, 30) + " ..." : user?.email}</p>

          <button onClick={handelLogout} className='mt-6 mb-2 bg-orange px-4 py-1.5 font-secondary-font text-white hover:bg-primary duration-150 rounded-full'>Logout</button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
