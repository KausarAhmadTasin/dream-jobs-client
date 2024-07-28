import { useState, useEffect } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Read initial theme state from localStorage
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const location = useLocation();

  useEffect(() => {
    // Apply the theme to the document
    document.documentElement.className = isDarkMode ? "dark" : "light";
    // Save the theme state to localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleDropdownClick = () => {
    setIsDropOpen(!isDropOpen);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Swap control
  const swap = (
    <>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleThemeToggle}
        />

        {/* sun icon */}
        <svg
          className="swap-on text-gray-200 mr-3 h-5 w-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-off text-gray-600 mr-3 h-5 w-5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </>
  );

  const navLinksDrawer = (
    <ul className="space-y-3">
      <li
        className="cursor-pointer lg:border-none"
        onClick={handleDropdownClick}
      >
        X
      </li>
      <Link to="/">
        <li className="cursor-pointer lg:border-none hover:underline hover:underline-offset-4 ">
          Home
        </li>
      </Link>
      <Link to="/jobs">
        <li className="cursor-pointer lg:border-none hover:underline hover:underline-offset-4 ">
          Jobs
        </li>
      </Link>
    </ul>
  );

  return (
    <>
      <nav className="min-w-full z-10 bg-gray-100 dark:bg-[#3c4853] flex justify-between pr-3 pl-4 lg:px-8 py-3">
        {/* Nav Start */}
        <div>
          <Link to="/">
            {" "}
            <h2 className="cursor-pointer baskerville-font text-xl font-semibold text-sky-500 dark:text-sky-300">
              Dream<span className="text-sky-400 dark:text-sky-200">Jobs</span>
            </h2>
          </Link>
        </div>

        {/* Nav center */}
        <ul className="lg:flex hidden lg:flex-row flex-col gap-x-5">
          <Link to="/">
            <li
              className={`cursor-pointer text-gray-600 dark:text-gray-200 lg:border-none hover:text-sky-500 ${
                location.pathname === "/"
                  ? " underline underline-offset-4 decoration-2 decoration-sky-400"
                  : ""
              }`}
            >
              Home
            </li>
          </Link>
          <Link to="/jobs">
            <li
              className={`cursor-pointer text-gray-600 dark:text-gray-200 lg:border-none hover:text-sky-500 ${
                location.pathname === "/jobs"
                  ? " underline underline-offset-4 decoration-2 decoration-sky-400"
                  : ""
              }`}
            >
              Jobs
            </li>
          </Link>
          <Link to="/addJob">
            <li
              className={`cursor-pointer text-gray-600 dark:text-gray-200 lg:border-none hover:text-sky-500 ${
                location.pathname === "/addJob"
                  ? " underline underline-offset-4 decoration-2 decoration-sky-400"
                  : ""
              }`}
            >
              Add Job
            </li>
          </Link>
          <Link to="/myJobs">
            <li
              className={`cursor-pointer text-gray-600 dark:text-gray-200 lg:border-none hover:text-sky-500 ${
                location.pathname === "/myJobs"
                  ? " underline underline-offset-4 decoration-2 decoration-sky-400"
                  : ""
              }`}
            >
              My Job
            </li>
          </Link>
        </ul>

        {/* Nav End */}
        <div className="flex items-center lg:gap-x-2">
          {swap}
          <div className="flex items-center">
            <Link to="login">
              {" "}
              <p className="font-bold text-sky-500 dark:text-sky-400 cursor-pointer hover:scale-x-105 hover:dark:text-sky-300 hover:text-sky-400 lg:mr-4 mr-3">
                Login
              </p>
            </Link>
            <div
              onClick={handleDropdownClick}
              className="lg:-ml-7 lg:hidden text-xl font-semibold dark:text-white text-gray-800"
            >
              <HiBars3BottomRight />
            </div>
          </div>
        </div>

        {/* Dropdown */}
        {isDropOpen ? (
          <div className="absolute text-right min-h-screen rounded-s-sm md:w-1/3 lg:hidden py-4 px-8 w-2/3 z-10 bg-slate-200 right-0 top-0 duration-300">
            {navLinksDrawer}
          </div>
        ) : (
          <div className="absolute lg:hidden min-h-screen py-4 px-8 z-10 bg-slate-200 -right-48 top-0 duration-300">
            {navLinksDrawer}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
