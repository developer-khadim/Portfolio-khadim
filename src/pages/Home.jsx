import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-8xl mx-auto w-full">
        {/* Main content container */}
        <div className="space-y-2 px-32 pt-[350px] ">
          {/* Title with responsive font sizes */}
          <h1 className="text-white font-semibold leading-none tracking-tight  ">
            <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[230px]">
              FOLIO
            </span>
          </h1>
          {/* Subtitle with responsive spacing and font sizes */}
          <div className="mt-6 sm:mt-8 md:mt-10">
            <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-xl">
              Hi, it's{' '}
              <span className="text-[#7042D2] font-bold hover:text-[#8B5CF6] transition-colors">
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