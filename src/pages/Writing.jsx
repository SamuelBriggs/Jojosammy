import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "./Footer";
import { BLOG_TITLE } from '../utils/BlogTitle';

const Writing = () => {

  const fullDate = new Date();
    const formattedDate = fullDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });


  const [selectedItem, setSelectedItem] = useState("Writing");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className='mt-32 ml-40'>
        <Header /> 

        <div className='flex flex-row custom:flex-col mt-20 custom:-ml-40 custom:justify-center'>
        <div className="mb-2 custom:mb-8 custom:flex custom:flex-row">
          <ul className="flex flex-col w-full h-full custom:h-12 custom:pt-2 custom:border custom:mr-7 custom:ml-7 custom:flex custom:flex-row custom:space-x-20 custom:justify-center">
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
              className={`cursor-pointer mb-2 text-md sm:text-md  ${
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
              className={`cursor-pointer text-md sm:text-md  ${
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


        <div className="ml-40 w-7/12">
                {
                    BLOG_TITLE.map((title) => (
                        <div key={title.key} className='flex border-b border-bg-[#acaeb8] mb-3 pointer-cursor flex-row justify-between'>
                            <Link to={title.path}>
                                <div className="text-white text-1xl font-bold blog-header">{title.label}</div>
                            </Link>
                            <div className="text-[#acaeb8]">{formattedDate}</div>
                            <hr />
                        </div>
                    ))
                }
            </div>

        </div>

        <Footer />
    </div>
  )
}

export default Writing