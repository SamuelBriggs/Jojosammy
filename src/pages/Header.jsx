// import React from "react";
// import Logo from "../images/svg/Logo.svg";

// const Layout = () => {
//   return (
//     <div className="custom:-ml-20 custom:justify-center flex flex-col md:flex-row md:items-center 
//     sm:flex-row sm:items-center lg:flex-row lg:items-center xl:flex-row xl:items-center 
//     2xl:flex-row 2xl:items-center custom2:justify-center
//     custom3:flex custom3:flex-col custom3:w-48 custom3:justify-center 
//     custom3:-ml-12 custom3:h-32">
//       <div className="custom2:border flex-shrink-0 custom2:flex-col custom2:justify-center custom3:flex-col custom3:justify-center">
//         <img className="custom3:justify-center custom3:ml-20 custom2:border custom2:justify-center" 
//         onClick={() => { window.location.href = "/" }} 
//         style={{ width: "35px", height: "35px", cursor: "pointer" }} 
//         src={Logo} alt="No image yet" />
//         <div className="text-white text-2xl font-bold name custom2:border custom2:justify-center custom2:mt-5 custom3:mt-8" 
//         onClick={() => { window.location.href = "/" }}
//         style={{ cursor: "pointer" }}>
//           Samuel Alawode
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;





import React from "react";
import Logo from "../images/svg/Logo.svg";

const Layout = () => {
  return (
    <div className="custom:-ml-20 custom2:flex flex-col custom:flex custom:flex-row
    custom2:justify-center custom3:flex custom3:flex-col custom3:w-48 custom3:justify-center 
    custom3:-ml-12 custom3:h-32">
      
      <div className="custom:w-12 flex-shrink-0 custom2:justify-center custom3:flex-col custom3:justify-center">
        <img className="custom3:justify-center custom3:ml-20 custom2:w-full custom2:ml-16 custom2:justify-center" 
        onClick={() => { window.location.href = "/" }} 
        style={{ width: "35px", height: "35px", cursor: "pointer" }} 
        src={Logo} alt="No image yet" />
        </div>

        <div className="custom:ml-40 custom:w-52 text-white text-2xl font-bold name custom2:justify-center custom2:mt-10 custom3:mt-8" 
        onClick={() => { window.location.href = "/" }}
        style={{ cursor: "pointer" }}>
          Samuel Alawode
        </div>
         
    </div>
  );
};

export default Layout;





