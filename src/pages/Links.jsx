import React from 'react'
import { useState} from 'react';
import { Link } from "react-router-dom";



const Links = () => {

  const [selectedItem, setSelectedItem] = useState("About");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
        <div className="mt-10 sm:-ml-16 mb-2 custom:flex custom:flex-row
        custom2:flex custom2:flex-row custom3:flex custom3:flex-row">
          <ul className="flex flex-col w-full h-full custom:h-12 custom:pt-2 custom:border custom:mr-7 custom:ml-7 custom:flex 
          custom:flex-row custom:space-x-24 custom:justify-center
          custom2:h-10 custom2:pt-2 custom2:border custom2:mr-7 custom2:ml-7 custom2:flex custom2:flex-row 
          custom2:space-x-20 custom2:justify-center 
          custom3:h-10 custom3:pt-2 custom3:border custom3:mr-7 custom3:ml-7 custom3:flex custom3:flex-row 
          custom3:space-x-10 custom3:justify-center">
            <li
              onClick={() => handleItemClick("About")}
              className={`cursor-pointer mb-2 text-md sm:text-md ${
                selectedItem === "About" ? "text-[#22c55e]" : "text-white"
              }`}
            >
              <span
                className={`inline-block w-2 h-2 bg-[#22c55e] rounded-full mr-2 ${
                  selectedItem === "About" ? "visible" : "invisible"
                }`}
              ></span>
              <Link to="/">About</Link>
            </li>
            <li
              onClick={() => handleItemClick("Writing")}
              className={`cursor-pointer mb-2 text-md ${
                selectedItem === "Writing" ? "text-[#22c55e]" : "text-white"
              }`}
            >
              <span
                className={`inline-block w-2 h-2 bg-[#22c55e] rounded-full mr-2 ${
                  selectedItem === "Writing" ? "visible" : "invisible"
                }`}
              ></span>
              <Link to="/writing">Writing</Link>
            </li>
            <li
              onClick={() => handleItemClick("Misc")}
              className={`cursor-pointer text-md ${
                selectedItem === "Misc" ? "text-[#22c55e]" : "text-white"
              }`}
            >
              <span
                className={`inline-block w-2 h-2 bg-[#22c55e] rounded-full mr-2 ${
                  selectedItem === "Misc" ? "visible" : "invisible"
                }`}
              ></span>
              <Link to="/misc">Misc</Link>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Links