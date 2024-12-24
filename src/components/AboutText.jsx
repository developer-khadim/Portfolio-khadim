import React from 'react'

const AboutText = () => {
  return (
    <div className="min-h-screen w-full bg-black px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52">
      <div className="py-20 sm:py-32 md:py-40 lg:py-60">
        <p
          className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text break-words"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #FCC188 0%, #7042D2 65%, #2E008E 100%)',
          }}
        >
          Hello 👋 I'm Khadim Ali, a React Front-End 
          Developer passionate <br /> about creating 
          dynamic and responsive web applications.
        </p>
      
      </div>
    </div>
  )
}

export default AboutText