import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "./Footer";

const Misc = () => {

  const [selectedItem, setSelectedItem] = useState("Misc");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className='mt-32 ml-40'>
        <Header /> 

        <div className='flex flex-row custom:flex-col mt-20 custom:-ml-40 
        custom:justify-center custom2:flex-col custom2:-ml-40 custom2:justify-center
        custom3:flex-col custom3:-ml-40 custom3:justify-center custom3:mt-10'>
        <div className="sm:-ml-16 mb-2 custom:flex custom:flex-row custom2:flex custom2:flex-row
        custom3:flex custom3:flex-row">
          <ul className="flex flex-col w-full h-full custom:h-12 custom:pt-2 custom:border custom:mr-7 
          custom:ml-7 custom:flex custom:flex-row custom:space-x-24 
          custom:justify-center custom2:h-10 custom2:pt-2 custom2:border 
          custom2:mr-7 custom2:ml-7 custom2:flex custom2:flex-row 
          custom2:space-x-20 custom2:justify-center 
          custom3:h-10 custom3:pt-2 custom3:border custom3:mr-7 custom3:ml-7 custom3:flex custom3:flex-row 
          custom3:space-x-10 custom3:justify-center">
            <li
              onClick={() => handleItemClick("About")}
              className={`cursor-pointer mb-2 text-md sm:text-md  ${
                selectedItem === "About" ? "text-green-500" : "text-white"
              }`}
            >
              <span
                className={`inline-block w-2 h-2 bg-green-500 rounded-full mr-2 ${
                  selectedItem === "About" ? "visible" : "invisible"
                }`}
              ></span>
              <Link to="/">About</Link>
            </li>
            <li
              onClick={() => handleItemClick("Writing")}
              className={`cursor-pointer mb-2 text-md sm:text-md ${
                selectedItem === "Writing" ? "text-green-500" : "text-white"
              }`}
            >
              <span
                className={`inline-block w-2 h-2 bg-green-500 rounded-full mr-2 ${
                  selectedItem === "Writing" ? "visible" : "invisible"
                }`}
              ></span>
              <Link to="/writing">Writing</Link>
            </li>
            <li
              onClick={() => handleItemClick("Misc")}
              className={`cursor-pointer text-md sm:text-md  ${
                selectedItem === "Misc" ? "text-green-500" : "text-white"
              }`}
            >
              <span
                className={`inline-block w-2 h-2 bg-green-500 rounded-full mr-2 ${
                  selectedItem === "Misc" ? "visible" : "invisible"
                }`}
              ></span>
              <Link to="/misc">Misc</Link>
            </li>
          </ul>
        </div>

        <div className="custom3:mt-8 custom3:w-10/12 custom3:ml-8 custom3:mr-5
        custom3:text-md">

        </div>
        </div>

      <Footer />

    </div>
  )
}

export default Misc