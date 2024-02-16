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

        <div className='flex flex-row mt-20 -ml-2'>
        <div className="">
          <ul>
            <li
              onClick={() => handleItemClick("About")}
              className={`cursor-pointer mb-2 text-sm  ${
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
              className={`cursor-pointer mb-2 text-sm  ${
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
              className={`cursor-pointer text-sm  ${
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


        <div>
                {
                    BLOG_TITLE.map((title) => (
                        <div key={title.key} className='flex flex-row justify-between'>
                            <Link to={title.path}>
                                <div className="ml-40 text-white text-1xl font-bold blog-header">{title.label}</div>
                            </Link>
                            <div>{formattedDate}</div>
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