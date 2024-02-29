import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "./Footer";

const HomePage = () => {
  
  const [selectedItem, setSelectedItem] = useState("About");

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };


  return (
    <div className="mt-32 ml-40">
      <Header />
      {/* */}
      <div className="flex flex-row custom:flex-col mt-20 
      custom:-ml-40 custom:justify-center custom2:flex-col custom2:-ml-40 custom2:justify-center
      custom3:flex-col custom3:-ml-40 custom3:justify-center custom3:mt-10 
      custom2:mt-10">
        <div className="mb-2 custom:flex custom:flex-row
        custom2:flex custom2:flex-row custom3:flex custom3:flex-row">
          <ul className="flex flex-col w-full h-full custom:h-12 custom:pt-2 custom:border custom:mr-7 custom:ml-7 custom:flex 
          custom:flex-row custom:space-x-20 custom:justify-center
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


        <div className="ml-40 text-[#acaeb8] text-md w-6/12 custom:text-sm custom:mt-5 
        custom:w-9/12 custom:ml-20 custom2:text-md custom2:mt-5 custom2:w-10/12 
        custom2:ml-10 custom3:mt-8 custom3:w-10/12 custom3:ml-8 custom3:mr-5
        custom3:text-md">
          Lorem ipsum dolor sit amet, consectetur <span className="text-[#22c55e]">adipiscing elit</span>.<br /><br />
          aliquet velit malesuada. Ut sit amet consectetur lacus. Integer luctus dui vitae quam ultrices, 
          <a href="https://example.com" className="text-[#22c55e]"> justo bibendum </a>
          <a href="https://example.com" className="text-[#22c55e]"> Vivamus </a>
          <a href="https://example.com" className="text-[#22c55e]"> a sem ut arcu  </a>
          <a href="https://example.com" className="text-[#22c55e]"> ullamcorper </a>
          <a href="https://example.com" className="text-[#22c55e]"> Phasellus </a>
          <a href="https://example.com" className="text-[#22c55e]"> efficitur. </a>
          
          ultrices tincidunt dolor, nec pharetra lorem. Integer id arcu nec nisi
          ultrices ullamcorper vel a orci. Sed id quam id nulla fermentum
          vehicula sit amet vel orci. <br /><br />
          
          Vivamus tincidunt efficitur sapien, eget cursus dolor varius sed. Sed hendrerit urna non purus fringilla, non
          ultrices odio rhoncus. Donec a justo ac ipsum pharetra varius. 
          <a href="https://example.com" className="text-[#22c55e]"> Sed eu tincidunt </a>
          <a href="https://example.com" className="text-[#22c55e]"> turpis.  </a>
          <a href="https://example.com" className="text-[#22c55e]"> Sed fermentum </a>
          <a href="https://example.com" className="text-[#22c55e]"> tellus </a>
          
          id tellus tincidunt, vel
          ultricies urna vestibulum. Nunc auctor, justo vel dictum efficitur,
          eros dui lobortis felis, id lobortis sapien metus vel justo. Sed non
          dui quis nibh vehicula vehicula. 
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
