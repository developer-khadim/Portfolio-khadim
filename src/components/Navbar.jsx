import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const location = useLocation(); 

  const menuItems = [
    { id: "001", title: "About Me", subtitle: "Introduction & Background", path: "/about" },
    { id: "002", title: "My Work", subtitle: "Case study walkthrough", path: "/work" },
    { id: "003", title: "Contact", subtitle: "How to contact me", path: "/contact" },
  ];

  const handleNavigation = (path) => {
    window.location.href = path;
    setIsIndexOpen(false);
  };

  // Determine the current page based on the path
  const currentPage = menuItems.find((item) => item.path === location.pathname)?.title || "Index";

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-transparent z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-white text-xl flex items-center font-bold">
            <img src={logo} alt="logo" className="mr-2" />
            Khadim
          </a>

          {/* Dynamic Button */}
          <button
            onClick={() => setIsIndexOpen(true)}
            className="px-6 py-3 text-white font-bold bg-black border border-white/20 rounded-full hover:bg-white/10 transition-all"
          >
            {currentPage} {/* Dynamically updates based on the current page */}
          </button>
        </div>
      </nav>

      {/* Index Modal */}
      {isIndexOpen && (
        <div className="fixed inset-0 bg-black/95 z-50">
          <div className="min-h-screen px-4 md:px-8 py-6">
            <div className="max-w-6xl mx-auto flex flex-col justify-center h-screen">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-16">
                <h2 className="text-white/70 text-lg">Index Items</h2>
                <button
                  onClick={() => setIsIndexOpen(false)}
                  className="px-6 py-2 bg-transparent text-white border border-white/20 rounded-full hover:bg-white/10 transition-all"
                >
                  Close
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-8">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.path)}
                    className="block group w-full text-left"
                  >
                    <div className="flex flex-col md:flex-row md:items-center font-bold justify-between py-6 border-t border-white/10">
                      <div className="flex items-center gap-6 mb-2 md:mb-0">
                        <span className="text-white/50 font-mono">{item.id}</span>
                      </div>
                      <div className="text-right">
                        <h3 className="text-white text-2xl md:text-3xl group-hover:text-white/70 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-white/50 text-sm md:text-base pl-12 md:pl-0">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
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
