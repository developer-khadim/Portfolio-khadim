import React, { useState, useEffect, useCallback } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorLag, setCursorLag] = useState({ x: 0, y: 0 });
  const [isHoveringNavbar, setIsHoveringNavbar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const updateCursorLag = useCallback(() => {
    if (isMobile) return;
    
    setCursorLag((prev) => ({
      x: prev.x + (cursorPosition.x - prev.x) * 0.25,
      y: prev.y + (cursorPosition.y - prev.y) * 0.25,
    }));
  }, [cursorPosition, isMobile]);

  useEffect(() => {
    if (isMobile) return;

    let animationFrameId;
    
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCursorPosition({
        x: Math.min(Math.max(clientX, 0), window.innerWidth),
        y: Math.min(Math.max(clientY, 0), window.innerHeight),
      });
    };

    const animate = () => {
      updateCursorLag();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [updateCursorLag, isMobile]);

  const handleNavbarMouseEnter = () => !isMobile && setIsHoveringNavbar(true);
  const handleNavbarMouseLeave = () => !isMobile && setIsHoveringNavbar(false);

  return (
    <div
      style={{
        background: 'linear-gradient(45deg, rgb(0, 0, 0) 32%, rgb(112, 66, 210) 60%, rgb(232, 187, 255) 100%)',
      }}
      className="text-white min-h-screen relative overflow-hidden"
    >
      {!isMobile && (
        <>
          <div
            className="fixed w-6 h-6 rounded-full pointer-events-none z-50"
            style={{
              transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
              transition: "transform 0.05s linear",
              marginLeft: "-1.5px",
              marginTop: "-1.5px",
              backgroundColor: isHoveringNavbar ? "white" : "rgba(255, 255, 255, 0.8)",
              mixBlendMode: "difference",
            }}
          />
          <div
            className="fixed w-8 h-8 rounded-full pointer-events-none blur-[2px] z-40"
            style={{
              transform: `translate3d(${cursorLag.x}px, ${cursorLag.y}px, 0)`,
              transition: "transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)",
              marginLeft: "-12px",
              marginTop: "-12px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          />
        </>
      )}
      
      <div
        onMouseEnter={handleNavbarMouseEnter}
        onMouseLeave={handleNavbarMouseLeave}
        className="relative z-20"
      >
        <Navbar />
      </div>
      
      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;