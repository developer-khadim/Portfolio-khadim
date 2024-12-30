import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
      document.title = 'Contact Me | Khadim-portfolio';
    }, []);
  return (
    <div className="h-screen w-auto flex justify-center items-center">
    <div className="flex flex-col items-center gap-5">
      {/* Title */}
      <div>
        <h1 className="font-bold text-6xl md:text-8xl lg:text-9xl">
        Questions?
        </h1>
      </div>
    </div>
  </div>
);
}

export default Contact