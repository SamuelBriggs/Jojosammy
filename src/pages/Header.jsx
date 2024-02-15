import React from "react";
import Logo from "../images/svg/Logo.svg";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="">
        <img className="" src={Logo} alt="No image yet" />
      </div>
      <div className="text-white text-2xl font-bold name">
        Samuel Alawode
      </div>
      {children}
    </div>
  );
};

export default Layout;
