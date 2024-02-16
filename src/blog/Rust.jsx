import React from 'react'
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import { Link } from 'react-router-dom';
import { BLOG_TITLE } from '../utils/BlogTitle';

const Rust = () => {

    const fullDate = new Date();
    const month = fullDate.getMonth;
    const day = fullDate.getDate;
    const year = fullDate.getFullYear();

    const date = month + day + "," + year;

  return (
    <div>
        <Header />

        <div>
            {
                BLOG_TITLE.map((title) => {
                    <div className='flex flex-row border justify-between'> 
                        <Link to={title.path}>
                        <div className="ml-40 text-white text-2xl font-bold name">{title.label}</div>
                        </Link>
                        <div>{date}</div>
                        <hr />
                    </div>
                })
            }

        </div>



        <Footer />

    </div>
  )
}

export default Rust