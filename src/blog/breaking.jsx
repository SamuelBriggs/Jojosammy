import React from 'react'
import Header from "../pages/Header";
import Footer from "../pages/Footer";


const Breaking = () => {


    return (
        <div className='mt-40 ml-40'>
            <Header/>

            <div className="ml-40 text-[#acaeb8] text-md w-6/12 custom:text-sm custom:mt-5
        custom:w-9/12 custom:ml-20 custom2:text-md custom2:mt-5 custom2:w-10/12
        custom2:ml-10 custom3:mt-8 custom3:w-10/12 custom3:ml-8 custom3:mr-5
        custom3:text-md">
                Lorem ipsum dolor sit amet, consectetur <span
                className="text-[#22c55e]">adipiscing elit</span>.<br/><br/>
                aliquet velit malesuada. Ut sit amet consectetur lacus. Integer luctus dui vitae quam ultrices,
                <a href="https://example.com" className="text-[#22c55e]"> justo bibendum </a>
                <a href="https://example.com" className="text-[#22c55e]"> Vivamus </a>
                <a href="https://example.com" className="text-[#22c55e]"> a sem ut arcu </a>
                <a href="https://example.com" className="text-[#22c55e]"> ullamcorper </a>
                <a href="https://example.com" className="text-[#22c55e]"> Phasellus </a>
                <a href="https://example.com" className="text-[#22c55e]"> efficitur. </a>

                ultrices tincidunt dolor, nec pharetra lorem. Integer id arcu nec nisi
                ultrices ullamcorper vel a orci. Sed id quam id nulla fermentum
                vehicula sit amet vel orci. <br/><br/>

                Vivamus tincidunt efficitur sapien, eget cursus dolor varius sed. Sed hendrerit urna non purus
                fringilla, non
                ultrices odio rhoncus. Donec a justo ac ipsum pharetra varius.
                <a href="https://example.com" className="text-[#22c55e]"> Sed eu tincidunt </a>
                <a href="https://example.com" className="text-[#22c55e]"> turpis. </a>
                <a href="https://example.com" className="text-[#22c55e]"> Sed fermentum </a>
                <a href="https://example.com" className="text-[#22c55e]"> tellus </a>

                id tellus tincidunt, vel
                ultricies urna vestibulum. Nunc auctor, justo vel dictum efficitur,
                eros dui lobortis felis, id lobortis sapien metus vel justo. Sed non
                dui quis nibh vehicula vehicula.
            </div>


            <Footer/>

        </div>
    )
}

export default Breaking;