import { useLoaderData } from "react-router-dom";
import "./Jobs.css";
import { useEffect, useState } from "react";
import Job from "../../components/Job/Job";
import axios from "axios";

const Jobs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const totalCount = useLoaderData();
  const jobsPerPage = 20;
  const numberOfPages = Math.ceil(totalCount?.count / jobsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    if (jobs.length !== 0) {
      setLoading(false);
    }
    axios.get("http://localhost:5000/jobs").then((res) => setJobs(res.data));
  }, [jobs.length]);

  const hanglePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const hangleNextClick = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {loading ? (
        <span className="loading min-h-screen dark:bg-[#1A1B1F] pt-40 loading-spinner loading-lg"></span>
      ) : (
        <div className="container mx-auto bg-sky-50 dark:bg-[#1A1B1F] pb-6">
          <div className="flex w-3/4 mx-auto gap-x-4 mt-3 mb-6 justify-between items-center">
            {" "}
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-6 underline underline-offset-[10px] decoration-dashed decoration-orange-400">
              All Jobs
            </h1>
            {/* 
              Search input 
          */}
            <div className="relative text-sm md:text-base md:w-1/2 w-full shadow-2xl">
              <input
                type="text"
                className="rounded-md h-full  py-2 border focus:outline-none focus:shadow-md px-3 flex items-center text-gray-600 w-full dark:bg-slate-50 bg-white"
                placeholder="Search by job title"
              />
              <div className="bg-sky-400 h-full rounded-e-md py-2 md:px-3 px-2 flex items-center text-white font-semibold top-0 -right-1 absolute cursor-pointer">
                <p>Search Job</p>
              </div>
            </div>
          </div>

          {/* Jobs Table */}
          <div>
            {
              <ul className="container mx-auto">
                <Job jobs={jobs} />
              </ul>
            }
          </div>
          <div className="flex justify-center my-10">
            <button
              onClick={hanglePrevClick}
              className="btn mr-1 border-none hover:bg-sky-300 bg-sky-400 text-white"
            >
              &lt; Prev
            </button>

            {pages.map((page) => (
              <button
                onClick={() => setCurrentPage(page + 1)}
                className={
                  currentPage === page + 1
                    ? `btn mr-1 border-none bg-orange-500 text-white`
                    : `btn mr-1 border-none hover:bg-sky-300 bg-sky-400 text-white`
                }
                key={page}
              >
                {page + 1}
              </button>
            ))}

            <button
              onClick={hangleNextClick}
              className="btn mr-1 border-none hover:bg-sky-300 bg-sky-400 text-white"
            >
              Next &gt;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Jobs;
