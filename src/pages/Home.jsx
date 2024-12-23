import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col justify-center items-center select-none">
          {/* Title */}
          <h1 className="text-white font-semibold leading-none tracking-tight relative">
            <span className="block text-7xl sm:text-8xl md:text-9xl lg:text-[200px] xl:text-[230px] transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-600 to-purple-500">
              FOLIO
            </span>
          </h1>

          {/* Subtitle */}
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 relative">
            <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl">
              Hi, it's{' '}
              <span className="text-[#7042D2] font-bold hover:text-[#8B5CF6] transition-colors duration-300 relative">
                Khadim Ali
              </span>
              . Welcome to My Portfolio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;