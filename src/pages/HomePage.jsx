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

      <div className="flex flex-row mt-20 -ml-2">
        <div className="mb-2">
          <ul>
            <li
              onClick={() => handleItemClick("About")}
              className={`cursor-pointer mb-2 text-sm ${
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
              className={`cursor-pointer mb-2 text-sm ${
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
              className={`cursor-pointer text-sm ${
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
        <div className="ml-40 text-[#acaeb8] text-sm w-6/12">
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
