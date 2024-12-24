import React from 'react';
import vsIcon from '../../assets/vs.svg';
import figmaIcon from '../../assets/figma-icon.png';
import adobeIcon from '../../assets/adobe.svg';
import sublimeIcon from '../../assets/sublime.png'
import html from '../../assets/html-icon.png'
import css from '../../assets/css-icon.png'
import js from '../../assets/js.png'
import reactIcon from '../../assets/react-js-icon.png'
import tailwindcss from '../../assets/tailwind-css-icon.png'
import bootstrap from '../../assets/bootstrap.png';

const Soft = () => {
  const SoftItems = [
    {
      iconPath: vsIcon,
      title: "VS Code",
    },
    {
      iconPath: sublimeIcon,
      title: "Sublime Text"
    },
    {
      iconPath: figmaIcon,
      title: "Figma",
    },
    {
      iconPath: adobeIcon,
      title: "Adobe",
    },
  ];
  const SkillsItem = [
    {
      IconPath: html, 
      Name: 'HTML5'
    },
    {
      IconPath: css, 
      Name: 'CSS'
    },
    {
      IconPath: js, 
      Name: 'Java Script'
    },
    {
      IconPath: reactIcon, 
      Name: 'React JS'
    },
    {
      IconPath: tailwindcss, 
      Name: 'Tailwind-CSS'
    },
    {
      IconPath: bootstrap, 
      Name: 'Bootstrap'
    },
  ]

  return (
    <div className="min-h-screen w-auto bg-black px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52">
      <div className="py-16 text-center">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          Software That I Use
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {SoftItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-white p-6"
            >
              <div className="w-full max-w-sm h-[200px] sm:h-[200px] md:h-[280px] border border-gray-600 flex items-center justify-center rounded-md mb-8 hover:border-white transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
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
      <div>
        <h2 className='text-white text-3xl ' >
           My Skills </h2>
      </div>
    </div>
  );
};

export default Soft;