import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <>
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        {/* Title */}
        <h1 className="font-bold text-6xl md:text-8xl lg:text-9xl">
          About Me.
        </h1>

        {/* Navigation Links */}
        <nav className="Links bg-gray-800 text-gray-400 py-4 px-8 rounded-full shadow-lg">
          <ul className="flex gap-6">
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
                    className={`transition duration-300 ease-in-out ${
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
    <div className="h-[100vh] w-screen bg-black px-52 ">
    <div className="py-60">
  <p
    className="font-bold text-7xl text-transparent bg-clip-text"
    style={{
      backgroundImage:
        'linear-gradient(45deg, #FCC188 0%, #7042D2 65%, #2E008E 100%)',
    }}
  >
    Hello 👋 I’m Khadim Ali, a React Front-End
  </p>
  <p
    className="font-bold text-7xl text-transparent bg-clip-text py-10"
    style={{
      backgroundImage:
        'linear-gradient(45deg, #FCC188 0%, #7042D2 65%, #2E008E 100%)',
    }}
  >
    Developer passionate about creating
  </p>
  <p
    className="font-bold text-7xl text-transparent bg-clip-text"
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
