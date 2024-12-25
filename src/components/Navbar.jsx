import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: "001", title: "About Me", subtitle: "Introduction & Background", path: "/about" },
    { id: "002", title: "My Work", subtitle: "Case study walkthrough", path: "/work" },
    { id: "003", title: "Contact", subtitle: "How to contact me", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentPage = menuItems.find((item) => item.path === location.pathname)?.title || "Index";

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isIndexOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isIndexOpen]);

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-transparent' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-white text-lg sm:text-xl flex items-center font-bold group"
          >
            <img 
              src={logo} 
              alt="logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 mr-2 group-hover:scale-110 transition-transform" 
            />
            <span className="group-hover:text-gray-300 transition-colors">Khadim</span>
          </Link>

          {/* Dynamic Button */}
          <button
            onClick={() => setIsIndexOpen(true)}
            className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white font-bold bg-black/60 
                     border border-white/20 rounded-full hover:bg-white/10 hover:scale-105 
                     active:scale-95 transition-all duration-300 backdrop-blur-sm"
          >
            {currentPage}
          </button>
        </div>
      </nav>

      {/* Index Modal with Animation */}
      {isIndexOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsIndexOpen(false);
          }}
        >
          <div className="min-h-screen px-4 sm:px-6 md:px-8 py-6">
            <div className="max-w-6xl mx-auto flex flex-col justify-center h-screen">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-8 sm:mb-16 animate-slideDown">
                <h2 className="text-white/70 text-base sm:text-lg font-medium">Index Items</h2>
                <button
                  onClick={() => setIsIndexOpen(false)}
                  className="px-4 sm:px-6 py-2 bg-white/5 text-white border border-white/20 
                           rounded-full hover:bg-white/10 hover:scale-105 active:scale-95 
                           transition-all duration-300"
                >
                  Close
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-4 sm:space-y-8 overflow-y-auto">
                {menuItems.map((item, index) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className="block group w-full text-left animate-slideUp"
                    onClick={() => setIsIndexOpen(false)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center font-bold justify-between 
                                  py-4 sm:py-6 border-t border-white/10 group-hover:border-white/20 
                                  transition-all duration-300">
                      <div className="flex items-center gap-4 sm:gap-6 mb-2 sm:mb-0">
                        <span className="text-white/50 font-mono text-sm sm:text-base">
                          {item.id}
                        </span>
                      </div>
                      <div className="text-left sm:text-right">
                        <h3 className="text-white text-xl sm:text-2xl md:text-3xl 
                                     group-hover:text-white/70 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-white/50 text-sm sm:text-base pl-0 sm:pl-12 md:pl-0 
                                    group-hover:text-white/60 transition-colors duration-300">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;