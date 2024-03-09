import React from "react";
import Logo from "../images/svg/Logo.svg";

const Layout = () => {
  return (
    <div className="custom:-ml-20 custom2:flex flex-col md:flex custom:flex custom:flex-row
    custom2:justify-center custom3:flex custom3:flex-col custom3:w-48 custom3:justify-center 
    custom3:-ml-12 custom3:h-32 sm:flex sm:flex-row sm:-ml-12
    md:flex-row sm:ml-5 mlg:flex mlg:flex-row
    lg:flex lg:flex-row">
      
      <div className="custom:w-12 flex-shrink-0 custom2:justify-center custom3:flex-col custom3:justify-center">
        <img className="custom3:justify-center custom3:ml-20 custom2:w-full custom2:ml-16 custom2:justify-center" 
        onClick={() => { window.location.href = "/" }} 
        style={{ width: "35px", height: "35px", cursor: "pointer" }} 
        src={Logo} alt="No image yet" />
        </div>

        <div className="custom:ml-40 custom:w-52 text-white text-2xl font-bold name 
        custom2:justify-center custom2:mt-10 custom3:mt-8 sm:ml-20 md:ml-40 mlg:ml-48 lg:ml-48" 
        onClick={() => { window.location.href = "/" }}
        style={{ cursor: "pointer" }}>
          Samuel Alawode
        </div>
         
    </div>
  );
};

export default Layout;





