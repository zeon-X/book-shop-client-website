import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="flex flex-col ">
      {/* TOP PART */}
      <div className="bg-gray-900 text-gray-200 flex justify-between py-2 sm:px-4 md:px-8 lg:px-16">
        <p className="inline-flex text-sm items-center ">
          BDT
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
        </p>
        <div className="grid grid-cols-3 gap-5">
          <div className="flex items-center hover:cursor-pointer hover:text-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>

            <p className="text-[16px] ml-1 lg:block sm:hidden">Wish List</p>
          </div>
          <div className="flex items-center hover:cursor-pointer hover:text-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-[16px] ml-1  lg:block sm:hidden">Contact</p>
          </div>
          <div className="flex items-center hover:cursor-pointer hover:text-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M14.47 2.47a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H9a5.25 5.25 0 100 10.5h3a.75.75 0 010 1.5H9a6.75 6.75 0 010-13.5h10.19l-4.72-4.72a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-[16px] ml-1 lg:block sm:hidden">Checkout</p>
          </div>
        </div>
      </div>

      {/* MID PART */}
      <div className="flex justify-between items-center  sm:px-4 md:px-8 lg:px-16 lg:py-1 sm:py-4">
        {/* navbtn  */}
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            className="btn btn-square rounded-none border-gray-200 btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        {/* img/logo  */}
        <div className="w-1/5 lg:block sm:hidden">
          <img style={{ width: "130px" }} src={logo} alt="" />
        </div>
        <img
          className="sm:block sm:ml-4 lg:hidden"
          style={{ width: "90px" }}
          src={logo}
          alt=""
        />
        {/* others  */}
        <div className="flex justify-end items-center sm:gap-4 lg:gap-12 w-4/5">
          {/* SEARCH BOX */}
          <div className="sm:hidden lg:flex">
            <input
              type="text"
              placeholder="Search Here..."
              className="input input-bordered rounded-none w-[320px]"
            />
            <button className="btn btn-success rounded-none">Search</button>
          </div>

          {/* login & reg  */}
          <div className="sm:text-sm lg:text-[15px]">
            <p className="font-bold">Sign in</p>
            <p>
              <span className="text-gray-400">or</span> <span>Register</span>
            </p>
          </div>
          {/* cart Quantity & price sm */}
          <div className=" items-start sm:flex lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 mr-1 text-success"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              />
            </svg>
            <p className="rounded-3xl bg-success font-bold text-white px-2 ml-[-20px]">
              0
            </p>
          </div>
          {/* cart Quantity & price  */}
          <div className=" items-center sm:hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-12 h-12 mr-1 text-success"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              />
            </svg>

            <div>
              <p className="text-gray-500 ">
                Shopping Cart
                <span className="rounded-3xl bg-success ml-2 text-white px-2">
                  0
                </span>
              </p>
              <p className="font-bold text-success text-lg">BDT 0.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH BOX SM*/}
      <div className="sm:flex lg:hidden px-4">
        <input
          type="text"
          placeholder="Search Here..."
          className="input input-bordered rounded-none w-full"
        />
        <button className="btn btn-success rounded-none">Search</button>
      </div>

      {/* Support call SM*/}
      <div className="sm:flex lg:hidden px-4 items-center justify-center py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          className="w-7 h-7"
        >
          <path
            fillRule="evenodd"
            d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
        <div className="ml-3">
          <p className="font-light text-sm">Free Support 24/7</p>
          <p className="font-bold text-sm">+88014021-99906</p>
        </div>
      </div>
      {/* BOTTOM PART NAV PART */}
      <div className="navbar  bg-success text-white  sm:px-4 md:px-8 lg:px-16 lg:flex sm:hidden">
        {/* left parts  */}
        <div className="flex-1 flex gap-10">
          {/* categoris */}
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-wide border-white text-white rounded-none bg-transparent m-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              BROWSE CATEGORIES
            </label>
            <div
              tabIndex={0}
              className="dropdown-content card card-compact w-64 p-2 shadow rounded-none border-1 bg-base-100 text-black"
            >
              <div className="card-body ">
                <p>Link1</p>
                <p>Link1</p>
                <p>Link1</p>
                <p>Link1</p>
                <p>Link1</p>
                <p>Link1</p>
                <p>Link1</p>
                <p>Link1</p>
                <p>Link1</p>
                <p>Link1</p>
              </div>
            </div>
          </div>
          {/* support */}
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8"
            >
              <path
                fillRule="evenodd"
                d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-3">
              <p className="font-light text-sm">Free Support 24/7</p>
              <p className="font-bold">+880-14021-99906</p>
            </div>
          </div>
        </div>
        {/* links  */}
        <div className="flex-none">
          <ul className="flex text-lg font-normal">
            <li className="btn btn-success text-white">HOME</li>
            <li className="btn btn-success text-white">NEW BOOKS</li>
            <li>
              <div className="dropdown dropdown-hover dropdown-end">
                <label tabIndex={0} className="btn btn-success text-white">
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
                <label tabIndex={0} className="btn btn-success text-white">
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
            <li className="btn btn-success text-white">BLOGS</li>
            <li className="btn btn-success text-white">ABOUT US</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /*  */
}
