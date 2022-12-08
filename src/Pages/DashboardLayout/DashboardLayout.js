import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  HiOutlineMenuAlt2,
  HiOutlinePlus,
  HiOutlineSearch,
} from "react-icons/hi";
import { IconContext } from "react-icons";

const DashboardLayout = () => {
  return (
    <section>
      <div className="w-full h-screen flex justify-center items-center bg-[#50565B]">
        <div className="drawer drawer-mobile bg-white container h-[700px] rounded-md mx-auto">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
              <HiOutlineMenuAlt2 />
            </label>
            <Outlet />
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu lg:w-60 w-36 bg-[#1A1C20] font-Ubuntu font-light">
              <p className="text-gray-400 text-center mb-8 pt-5 font-semibold tracking-widest text-2xl mt-3 uppercase font-Babes">
                Address <span>Contact</span>
              </p>
              <span className="border-b border-gray-500"></span>

              <Link to="/contactAdd">
                <aside className="flex items-center space-x-2 px-5 mt-10 bg-[#2D2F33] py-2 w-[80%] rounded-sm mx-auto">
                  <IconContext.Provider value={{ color: "white", size: 15 }}>
                    <HiOutlinePlus />
                  </IconContext.Provider>

                  <p className="text-white text-[14px]">Create Contact</p>
                </aside>
              </Link>
              <Link to="/contactSearch">
                <aside className="flex items-center space-x-2 px-5 bg-[#2D2F33] py-2 w-[80%] rounded-sm mx-auto">
                  <IconContext.Provider value={{ color: "white", size: 15 }}>
                    <HiOutlineSearch />
                  </IconContext.Provider>

                  <p className="text-white text-[14px]">Search Contact</p>
                </aside>
              </Link>
              <Link to="/manageContact">
                <aside className="flex items-center space-x-2 px-5 bg-[#2D2F33] py-2 w-[80%] rounded-sm mx-auto">
                  <IconContext.Provider value={{ color: "white", size: 15 }}>
                    <HiOutlinePlus />
                  </IconContext.Provider>

                  <p className="text-white text-[14px]">Manage Contact</p>
                </aside>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
