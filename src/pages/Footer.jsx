import React from 'react'
import { FaTwitter, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentDate = new Date();

    const openLink = (url) => {
        window.open(url, '_blank');
      };

  return (
    <div className='sm:w-full sm:-ml-16 mt-20 ml-52 flex flex-row w-6/12 custom:w-full custom:-ml-20 justify-between 
    custom2:w-full custom2:-ml-20 custom3:-ml-8 custom3:w-full custom3-flex 
    custom3:flex-col custom3:space-y-5 custom3:justify-center md:ml-40 sm:ml-40 ml-40'>
        <div className='text-[#acaeb8] custom:flex custom:flex-row custom:text-md custom:w-full custom2:-ml-7'>
         © {currentDate.getFullYear()} Samuel Alawode.
        </div>

        <div className="flex space-x-4 mt-1 custom2:-mr-4">
      <FaTwitter
        onClick={() => openLink('https://twitter.com/sam')}
        className="cursor-pointer  text-[#acaeb8]"
      />
      <FaEnvelope
        onClick={() => openLink('mailto:sam@email.com')}
        className="cursor-pointer text-[#acaeb8]"
      />
      <FaGithub
        onClick={() => openLink('https://github.com/sam')}
        className="cursor-pointer text-[#acaeb8]"
      />
      <FaLinkedin
        onClick={() => openLink('https://www.linkedin.com/in/sam')}
        className="cursor-pointer text-[#acaeb8]"
      />
    </div>
      </div>
  )
}

export default Footer