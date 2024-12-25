import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap/all";
import vsIcon from "../../assets/vs.svg";
import figmaIcon from "../../assets/figma-icon.png";
import adobeIcon from "../../assets/adobe.svg";
import sublimeIcon from "../../assets/sublime.png";
import html from "../../assets/html-icon.png";
import css from "../../assets/css-icon.png";
import js from "../../assets/js.png";
import reactIcon from "../../assets/react-js-icon.png";
import tailwindcss from "../../assets/tailwind-css-icon.png";
import bootstrap from "../../assets/bootstrap.png";

gsap.registerPlugin(ScrollTrigger);

const Soft = () => {
  const softSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);

  useEffect(() => {
    // Animate "Software That I Use"
    gsap.fromTo(
      softSectionRef.current.querySelectorAll(".soft-item"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: softSectionRef.current,
          start: "top 80%", // Start animation when 80% of the section is in view
        },
      }
    );

    // Animate "My Skills"
    gsap.fromTo(
      skillsSectionRef.current.querySelectorAll(".skills-item"),
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsSectionRef.current,
          start: "top 80%", // Start animation when 80% of the section is in view
        },
      }
    );
  }, []);

  const SoftItems = [
    { iconPath: vsIcon, title: "VS Code" },
    { iconPath: sublimeIcon, title: "Sublime Text" },
    { iconPath: figmaIcon, title: "Figma" },
    { iconPath: adobeIcon, title: "Adobe" },
  ];

  const SkillsItem = [
    { iconPath: html, title: "HTML5" },
    { iconPath: css, title: "CSS" },
    { iconPath: js, title: "JavaScript" },
    { iconPath: reactIcon, title: "React JS" },
    { iconPath: tailwindcss, title: "Tailwind CSS" },
    { iconPath: bootstrap, title: "Bootstrap" },
  ];

  const GridSection = ({ items, title, refName, itemClass }) => (
    <div ref={refName} className="py-16 text-center">
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${itemClass} flex flex-col items-center justify-center text-white p-6`}
          >
            <div className="w-full max-w-sm h-[200px] sm:h-[200px] md:h-[280px] border border-gray-600 flex items-center justify-center rounded-md mb-8 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-white">
              <img
                src={item.iconPath}
                alt={item.title}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-200 tracking-wide hover:text-white transition-colors duration-300">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-black px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52">
      <GridSection
        refName={softSectionRef}
        items={SoftItems}
        title="Software That I Use"
        itemClass="soft-item"
      />
      <GridSection
        refName={skillsSectionRef}
        items={SkillsItem}
        title="My Skills"
        itemClass="skills-item"
      />
    </div>
  );
};

export default Soft;
