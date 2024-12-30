import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const MyWork = () => {
  useEffect(() => {
        document.title = 'My Projects | Khadim-portfolio';
      }, []);
  return (
    <div className="h-screen w-auto flex justify-center items-center">
    <div className="flex flex-col items-center gap-5">
      {/* Title */}
      <div>
        <h1 className="font-bold text-6xl md:text-8xl lg:text-9xl">
         My Work.
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="Links bg-gray-800 text-gray-400 py-4 px-8 rounded-full shadow-lg">
        <ul className="flex gap-6">
          <li>
            <Link
              to="/"
              className="hover:text-white transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li className="text-gray-500">|</li>
          <li>
            <Link
              to="/about"
              className=" hover:text-white transition duration-300 ease-in-out"
            >
              About
            </Link>
          </li>
          <li className="text-gray-500">|</li>
          <li>
            <Link
              to="/work"
              className=" text-white font-bold hover:text-white transition duration-300 ease-in-out"
            >
              My Work
            </Link>
          </li>
          <li className="text-gray-500">|</li>
          <li>
            <Link
              to="/contact"
              className=" hover:text-white transition duration-300 ease-in-out"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
}

export default MyWork