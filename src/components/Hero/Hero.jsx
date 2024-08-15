import axios from "axios";
import { useState } from "react";
import Job from "../Job/Job";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      return;
    }

    axios.get(`http://localhost:5000/jobs?title=${searchTerm}`).then((res) => {
      setSearchResults(res.data);
    });
  };

  return (
    <div>
      <header>
        <div className="flex justify-between bg-sky-100 lg:mt-10 flex-col-reverse my-5 gap-x-4 border py-8 lg:py-32 rounded-[2rem] px-8 dark:bg-[#1A1B1F] items-center">
          {/* Search input */}
          <div className="relative mt-10 text-sm md:text-base lg:mt-14 lg:w-5/12 w-full shadow-2xl md:w-3/4">
            <input
              type="text"
              className="rounded-md h-full py-2 border focus:outline-none focus:shadow-md px-3 flex items-center text-gray-600 w-full dark:bg-slate-50 bg-white"
              placeholder="Search by job title"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <div
              className="bg-sky-400 h-full rounded-e-md py-2 md:px-3 px-2 flex items-center text-white font-semibold top-0 -right-1 absolute cursor-pointer"
              onClick={handleSearch}
            >
              <p>Search Job</p>
            </div>
          </div>

          <div className="text-center lg:w-3/5 md:w-3/4 ">
            <h1 className="text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-sky-600 dark:from-sky-400 to-orange-400 dark:to-orange-300 mb-5 font-semibold lg:mb-7">
              Your Dream Job Awaits
            </h1>
            <p className="dark:text-gray-200 text-gray-500">
              Find the best job opportunities tailored to your skills and
              preferences.{" "}
              <span className="underline underline-offset-[8px] decoration-dashed decoration-orange-400">
                Browse through various job categories
              </span>{" "}
              and apply seamlessly.
            </p>
          </div>
        </div>
      </header>

      {searchResults.length > 0 && (
        <div className="mt-10">
          <h3 className="text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-10 underline underline-offset-[10px] decoration-dashed decoration-orange-400 text-center">
            Searched Jobs
          </h3>
          {searchResults.length > 0 ? (
            <ul>
              <Job jobs={searchResults} />
            </ul>
          ) : (
            <p className="text-center mt-10">No Searched job!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;
