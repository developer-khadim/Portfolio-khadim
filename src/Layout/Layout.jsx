import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Layout = () => {
  return (
    <div
    style={{
      background: 'linear-gradient(45deg, rgb(0, 0, 0) 32%, rgb(112, 66, 210) 60%, rgb(232, 187, 255) 100%)',
    }}
      className="text-white h-screen"
    >
      <Navbar/>
      <main className=" ">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
