import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <>
    {/* Hero Section */}
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="flex flex-col items-center gap-3 sm:gap-5">
        {/* Title */}
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-center">
          About Me.
        </h1>
        {/* Navigation Links */}
        <nav className="Links bg-gray-800 text-gray-400 py-2 sm:py-4 px-4 sm:px-8 rounded-full shadow-lg overflow-x-auto max-w-full">
          <ul className="flex gap-2 sm:gap-6 whitespace-nowrap">
            {[
              { path: "/", label: "Home", isActive: false },
              { path: "/about", label: "About", isActive: true },
              { path: "/work", label: "My Work", isActive: false },
              { path: "/contact", label: "Contact", isActive: false },
            ].map(({ path, label, isActive }, index) => (
              <React.Fragment key={label}>
                {index > 0 && <li className="text-gray-500">|</li>}
                <li>
                  <Link
                    to={path}
                    className={`transition duration-300 ease-in-out text-sm sm:text-base ${
                      isActive ? "text-white font-bold" : "hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </div>

    {/* Content Section */}
    <div className="min-h-screen w-full bg-black px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52">
      <div className="py-20 sm:py-32 md:py-40 lg:py-60">
        <p
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text break-words"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #FCC188 0%, #7042D2 65%, #2E008E 100%)',
          }}
        >
          Hello 👋 I'm Khadim Ali, a React Front-End
        </p>
        <p
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text py-4 sm:py-6 md:py-8 lg:py-10 break-words"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #FCC188 0%, #7042D2 65%, #2E008E 100%)',
          }}
        >
          Developer passionate about creating
        </p>
        <p
          className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text break-words"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #FCC188 0%, #7042D2 65%, #2E008E 100%)',
          }}
        >
          dynamic and responsive web applications.
        </p>
      </div>
    </div>
  </>
);

export default About;
