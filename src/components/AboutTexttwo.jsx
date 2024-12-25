import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const AboutTexttwo = () => {
  const skillsSectionRef = useRef(null); // Create a reference for the section

  useEffect(() => {
    if (skillsSectionRef.current) {
      gsap.fromTo(
        skillsSectionRef.current.querySelectorAll(".gsap_text"),
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsSectionRef.current,
            start: "top 80%", // When 80% of the section is visible
            toggleActions: "play none none none", // Play on enter, do nothing else
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={skillsSectionRef} // Attach the reference to this div
      className="min-h-screen w-full bg-black px-4 sm:px-8 md:px-16 lg:px-32 xl:px-52"
    >
      <div className="py-20 sm:py-32 md:py-40 lg:py-60">
        <p
          className="gsap_text font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl text-transparent bg-clip-text break-words"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #FCC188 0%, #7042D2 65%, #2E008E 100%)',
          }}
        >
          I’ve been lucky enough <br /> to work with amazing <br /> clients, such as you...
        </p>
      </div>
    </div>
  );
};

export default AboutTexttwo;
