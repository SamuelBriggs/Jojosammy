import React from 'react'
import { FaTwitter, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentDate = new Date();

    const openLink = (url) => {
        window.open(url, '_blank');
      };

  return (
    <div className='mt-20 ml-52 flex flex-row w-6/12 justify-between'>
        <div className='text-[#acaeb8]'>
            C {currentDate.getFullYear()} Samuel Alawode.
        </div>

        <div className="flex space-x-4 mt-1">
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