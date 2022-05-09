import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFirefoxBrowser, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocation, faMailBulk, faMobile, faVoicemail } from "@fortawesome/free-solid-svg-icons";
import footerImg from "../../../asset/images/footer-bg.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={`footer flex flex-col gap-20 md:gap-5 md:flex-row md:justify-around  py-12 px-5 md:px-1 text-white`}>
      <div className="flex flex-col items-start">
        <h2 className="text-2xl font-bold mb-7">E-Warehouse</h2>
        <p className="max-w-[200px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere,
          illo.
        </p>
        <div className="flex gap-4 my-3 justify-center text-xl ml-3 ">
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl font-medium mb-5">Other Links</h3>
        <Link to="/">Home</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/trams-and-condition">Trams and condition</Link>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-5">Contacts</h3>
        <div className="flex items-center gap-3 mb-2">
          <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>{" "}
          <address>Rasulbag, Dhaka-1200</address>
        </div>
        <p>
          <FontAwesomeIcon icon={faMobile}/>
          <span>+880 1756415098</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faVoicemail}/>
          <span>zakaria.bn@gmail.com</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faFirefoxBrowser}></FontAwesomeIcon>
          <a href="https://google.com">www.google.com</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
