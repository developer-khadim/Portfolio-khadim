import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const AboutText = () => {
  const sectionRef = useRef(null); // Reference for the section

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".gsap_text"),
        { opacity: 0, scale: 0.8 }, // Starting state
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Trigger animation when 80% of the section is visible
            toggleActions: "play none none none", // Play animation on scroll
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={sectionRef} // Attach the ref to the main container
      className="min-h-screen w-full bg-black px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52"
    >
      <div className="py-20 sm:py-32 md:py-40 lg:py-60">
        <p
          className="gsap_text font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text break-words"
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
  );
};

export default AboutText;
