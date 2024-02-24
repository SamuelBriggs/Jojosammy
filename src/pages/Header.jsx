import React from "react";
import Logo from "../images/svg/Logo.svg";

const Layout = () => {

  return (
    <div className="custom:-ml-20 custom:justify-center flex flex-col md:flex-row md:items-center 
    sm:flex-row sm:items-center lg:flex-row lg:items-center xl:flex-row xl:items-center 
    2xl:flex-row 2xl:items-center custom2:flex custom2:flex-row custom2:justify-center">
      <div className="flex-shrink-0 custom2:-ml-28">
        <img className="" style={{width: "35px", height: "35px"}} src={Logo} alt="No image yet" />
      </div>
      <div className="ml-40 custom:ml-25 text-white text-2xl font-bold 
      name custom:-mt-9 custom2:ml-12">
        Samuel Alawode
      </div>
    </div>
  );

 };

export default Layout;


