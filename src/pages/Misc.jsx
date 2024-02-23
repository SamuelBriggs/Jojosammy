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

        <div className='flex flex-row custom:flex-col mt-20 custom:-ml-40 custom:justify-center'>
        <div className="mb-2 custom:flex custom:flex-row">
          <ul className="flex flex-col w-full h-full custom:h-12 custom:pt-2 custom:border custom:mr-7 custom:ml-7 custom:flex custom:flex-row custom:space-x-20 custom:justify-center">
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

        </div>

      <Footer />

    </div>
  )
}

export default Misc