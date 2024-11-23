import React from "react";
import image from "../../public/img1.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div id="header">
      <img src={image} alt="cloud" />
      <h1>Cheaf Cloud</h1>
    </div>
  );
};

export default Header;
