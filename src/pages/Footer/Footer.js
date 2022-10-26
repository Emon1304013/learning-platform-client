import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 shadow md:px-6 md:py-8 bg-purple-600 rounded-t-lg">
        <div className="sm:flex sm:items-center sm:justify-between sm:w-2/3 mx-auto">
          <Link to="/" className="flex items-center mb-4 sm:mb-0">
            <img
              src={logo}
              style={{ height: "50px", width: "50px" }}
              className="mr-3 rounded-full"
              alt=" Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              KAMAL'S CARE
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-white-500 sm:mb-0 dark:text-white">
            
              <Link to="/" className="mr-4 md:mr-6 ">
                <button className="cursor-pointer">HOME</button>
              </Link>
              <Link to="/courses" className="mr-4 md:mr-6 ">
                <button className="cursor-pointer">COURSES</button>
              </Link>

              <Link to='/blog' className="mr-4 md:mr-6">
                <button className=" cursor-pointer">BLOG</button>
              </Link>

              <Link to='/faq' >
                <button className="cursor-pointer">FAQ</button>
              </Link>

          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-white">
          ©2022
          <span className="hover:underline"> KAMAL'S CARE</span>. All Rights
          Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;