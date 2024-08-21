import { Link, useLoaderData } from "react-router-dom";
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

  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem("currentPage")) || 0
  );

  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    if (jobs.length !== 0) {
      setLoading(false);
    }
    axios
      .get(
        `https://dream-jobs-server-nine.vercel.app/jobs?page=${currentPage}&size=${jobsPerPage}`
      )
      .then((res) => setJobs(res.data));
  }, [jobs.length, currentPage, jobsPerPage]);

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {loading ? (
        <span className="loading min-h-screen flex justify-center mx-auto bg-sky-500 items-center dark:bg-[#1A1B1F] pt-40 loading-ring loading-lg"></span>
      ) : jobs.length === 0 ? (
        <div className="min-h-screen flex flex-col gap-y-7 justify-center items-center">
          <p>No jobs found!</p>
          <Link to="/addJob">
            <button className="btn border-none outline-none bg-sky-500 text-white hover:bg-sky-400">
              Add Job
            </button>
          </Link>
        </div>
      ) : (
        <div className="md:container mx-4 md:mx-auto pt-3 bg-sky-100 rounded-lg mb-16 mt-4 dark:bg-[#1A1B1F] pb-6">
          {" "}
          <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-10 underline underline-offset-[10px] text-center decoration-dashed decoration-orange-400">
            All Jobs
          </h1>
          {/* Jobs Table */}
          <div className=" min-h-screen">
            {
              <ul className="container mx-auto">
                <Job jobs={jobs} />
              </ul>
            }
          </div>
          <div className="flex mx-4 justify-center my-10">
            <button
              onClick={handlePrevClick}
              className="btn mr-1 border-none w-10 md:w-fit hover:bg-sky-300 bg-sky-400 text-white"
            >
              &lt; Prev
            </button>

            {pages.map((page) => (
              <button
                onClick={() => {
                  setCurrentPage(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={
                  currentPage === page
                    ? `btn mr-1 border-none w-2 md:w-fit bg-orange-500 text-white`
                    : `btn mr-1 border-none w-2 md:w-fit hover:bg-sky-300 bg-sky-400 text-white`
                }
                key={page}
              >
                {page}
              </button>
            ))}

            <button
              onClick={handleNextClick}
              className="btn mr-1 border-none w-10 md:w-fit hover:bg-sky-300 bg-sky-400 text-white"
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
