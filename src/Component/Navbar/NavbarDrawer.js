import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const NavbarDrawer = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <Navbar></Navbar>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          {/* <!-- Sidebar content here --> */}
          <li className="">HOME</li>
          <li className="">NEW BOOKS</li>
          <li>
            <div className="dropdown dropdown-hover dropdown-horizontal">
              <label tabIndex={0} className="">
                BEST SELLERS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 mt-1 px-10 text-black"
              >
                <NavLink>Link1</NavLink>
                <NavLink>Link1</NavLink>
                <NavLink>Link1</NavLink>
              </ul>
            </div>
          </li>
          <li>
            <div className="dropdown dropdown-hover dropdown-end">
              <label tabIndex={0} className="">
                PUBLISHERS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 mt-1 px-10 text-black"
              >
                <NavLink>Link1</NavLink>
                <NavLink>Link1</NavLink>
                <NavLink>Link1</NavLink>
              </ul>
            </div>
          </li>
          <li className="">BLOGS</li>
          <li className="">ABOUT US</li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDrawer;
