import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropOpen, setIsDropOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropOpen(!isDropOpen);
  };

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
    <nav className="min-w-full flex justify-between px-10 py-3">
      {/* Nav Start */}
      <div>
        <Link to="/">
          {" "}
          <h2 className="cursor-pointer">
            Dream<span>Jobs</span>
          </h2>
        </Link>
      </div>

      {/* Nav center */}
      <ul className="lg:flex hidden lg:flex-row flex-col gap-x-5">
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
        <Link to="/addJob">
          <li className="cursor-pointer lg:border-none hover:underline hover:underline-offset-4 ">
            Add Job
          </li>
        </Link>
        <Link to="/myJobs">
          <li className="cursor-pointer lg:border-none hover:underline hover:underline-offset-4 ">
            My Job
          </li>
        </Link>
      </ul>

      {/* Nav End */}
      <div className="flex gap-x-2">
        <Link to="login">
          {" "}
          <p className="font-bold text-sky-400 cursor-pointer hover:scale-105 hover:text-sky-500 mr-4">
            Login
          </p>
        </Link>
        <div onClick={handleDropdownClick} className="lg:-ml-7 lg:hidden">
          ##
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
  );
};

export default Navbar;
