import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "gsap/all";
import AboutText from "../components/AboutText";
import Experience from "../components/Experience";
import AboutTexttwo from "../components/AboutTexttwo";
import Soft from "../components/about/Soft";
// import MoreAbout from "../components/about/MoreAbout";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Smooth scrolling setup
    gsap.to(window, {
      scrollTo: { y: "max", autoKill: false },
      duration: 1,
      ease: "power2.inOut",
    });

    // Hero Section animation
    gsap.fromTo(
      ".hero-title",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    // Navigation Links animation
    gsap.fromTo(
      ".nav-links",
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1,
      }
    );

    // Scroll animations for sections
    const sections = gsap.utils.toArray(".section");
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen flex justify-center items-center px-4 section">
        <div className="flex flex-col items-center gap-3 sm:gap-5">
          {/* Title */}
          <h1 className="hero-title font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-center">
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
                      className={`nav-links transition duration-300 ease-in-out text-sm sm:text-base ${
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
      {/* Sections */}
      <div className="section">
        <AboutText />
      </div>
      <div className="section">
        <Experience />
      </div>
      <div className="section">
        <AboutTexttwo />
      </div>
      <div className="section">
        <Soft />
      </div>
      {/* <div className="section" >
        <MoreAbout/>
      </div> */}
    </>
  );
};

export default About;
