import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "./Footer";
import { BLOG_TITLE } from "../utils/BlogTitle";

const Writing = () => {
  const fullDate = new Date();
  const formattedDate = fullDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const [selectedItem, setSelectedItem] = useState("Writing");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="mt-32 ml-40 mb-10 sm:ml-28 sm:mr-10">
      <Header />

      <div
        className="flex flex-row custom:flex-col mt-20 custom:-ml-40
        custom:justify-center custom2:flex-col custom2:-ml-40 custom2:justify-center
        custom3:flex-col custom3:-ml-40 custom3:justify-center 
        custom2:mt-10 custom3:mt-10"
      >
        <div
          className="m:-ml-16 mb-2 custom:mb-8 custom:flex custom:flex-row 
        custom2:flex custom2:flex-row custom3:flex custom3:flex-row"
        >
          <ul
            className="flex flex-col w-full h-full custom:h-12 
          custom:pt-2 custom:border custom:mr-7 custom:ml-7 
          custom:flex custom:flex-row custom:space-x-24 
          custom:justify-center custom2:h-10 custom2:pt-2 custom2:border custom2:mr-7 custom2:ml-7 custom2:flex custom2:flex-row 
          custom2:space-x-20 custom2:justify-center
          custom3:h-10 custom3:pt-2 custom3:border custom3:mr-7 custom3:ml-7 custom3:flex custom3:flex-row 
          custom3:space-x-10 custom3:justify-center"
          >
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

        {/* <div className="sm:border sm:ml-14 sm:w-10/12 ml-40 custom:ml-7 custom:-mr-0 w-7/12 custom:w-11/12 custom2:mt-8 
        custom2:ml-10 custom2:w-10/12 custom3:mt-8 custom3:w-10/12 custom3:ml-8 custom3:mr-5
        custom3:text-md">
                {
                    BLOG_TITLE.map((title) => (
                        <div key={title.key} className='flex border-b border-bg-[#acaeb8] mb-4 pointer-cursor flex-row justify-between items-start'>
                            <div className="">
                            <Link to={title.path}>
                                <div className="text-white custom:text-md font-bold custom:font-normal blog-header">{title.label}</div>
                            </Link>
                            </div>

                            <div className="text-[#acaeb8] custom:text-sm">
                              {formattedDate}
                              </div>
                            
                            <div className="">
                            <hr />
                            </div>
                        </div>
                    ))}
            </div> */}

        <table
          className="sm:border sm:ml-14 sm:w-10/12 ml-40 custom:ml-7 custom:-mr-0 w-7/12 custom:w-11/12 custom2:mt-8 
    custom2:ml-10 custom2:w-10/12 custom3:mt-8 custom3:w-10/12 custom3:ml-8 custom3:mr-5
    custom3:text-md"
        >
          <tbody>
            {BLOG_TITLE.map((title, index) => (
              <tr
                key={title.key}
                className={`border-b border-bg-[#acaeb8] mb-4 pointer-cursor ${
                  index !== BLOG_TITLE.length - 1 ? "mb-5" : ""
                }`}
              >
                <td className="pr-4">
                  <Link to={title.path}>
                    <div className="text-white custom:text-md font-bold custom:font-normal blog-header">
                      {title.label}
                    </div>
                  </Link>
                </td>

                <td className="text-[#acaeb8] custom:text-sm">
                  {formattedDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};
export default Writing;
