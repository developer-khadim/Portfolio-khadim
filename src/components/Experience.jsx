import React from "react";

const Experience = () => {
  const menuItems = [
    {
      id: "2023-Present",
      title: "Bachelors in Computer Science",
      subtitle: "The Shaikh Ayaz University SHP",
    },
    {
      id: "2022-2022",
      title: "Web Development Course",
      subtitle: "IBA University Sukkur",
    },
    {
      id: "2020-2022",
      title: "First-Year & Second-Year",
      subtitle: "Qazi Habibullah High School SHP",
    },
  ];

  return (
    <div className="min-h-[80vh] w-full bg-black px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52 flex flex-col gap-8">
      {/* Title Section */}
      <div className="text-3xl font-bold text-gray-300 text-center sm:text-left">
        Experience
      </div>

      {/* Experience Items */}
      <div className="space-y-6 sm:space-y-8 overflow-y-auto">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className="block group w-full text-left animate-slideUp"
            style={{ animationDelay: `${index * 100}ms` }}
            aria-label={`Experience in ${item.title}`}
          >
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between
                         py-6 border-b border-white/10 group-hover:border-white/20
                         transition-all duration-300"
            >
              {/* ID Section */}
              <div className="text-gray-400 font-mono text-base sm:text-lg">
                {item.id}
              </div>

              {/* Title and Subtitle */}
              <div className="text-left sm:text-right mt-2 sm:mt-0">
                <h3
                  className="text-white text-lg sm:text-xl md:text-2xl 
                             group-hover:text-gray-300 transition-colors duration-300"
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-400 text-sm sm:text-base
                             group-hover:text-gray-200 transition-colors duration-300"
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
