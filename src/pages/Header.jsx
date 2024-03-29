import React from "react";
import Logo from "../images/svg/Logo.svg";

const Layout = () => {
  return (
    <div className="flex flex-row">
      <div className="">
        <img className="" style={{width: "35px", height: "35px"}} src={Logo} alt="No image yet" />
      </div>
      <div className="ml-40 text-white text-2xl font-bold name">
        Samuel Alawode
      </div>
    </div>
  );
};

export default Layout;
