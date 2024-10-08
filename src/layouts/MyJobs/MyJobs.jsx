import { useContext, useEffect, useState } from "react";
import Job from "../../components/Job/Job";
import axios from "axios";
import AuthContext from "../../provider/AuthProvider/AuthContex";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const MyJobs = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const jobsPerPage = 20;

  const [currentMyPage, setCurrentMyPage] = useState(
    parseInt(localStorage.getItem("currentMyPage")) || 0
  );

  const numberOfPages = Math.ceil(totalCount / jobsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const { user } = useContext(AuthContext);

  // Fetch data
  useEffect(() => {
    axios
      .get(
        `https://dream-jobs-server-nine.vercel.app/jobsCount?email=${user?.email}`
      )
      .then((res) => setTotalCount(res.data.count));

    axios
      .get(
        `https://dream-jobs-server-nine.vercel.app/jobs?email=${user?.email}&page=${currentMyPage}&size=${jobsPerPage}`
      )
      .then((res) => {
        setJobs(res.data);
      });
    setLoading(false);
  }, [currentMyPage, jobsPerPage, user?.email]);

  // Pagination localstorage
  useEffect(() => {
    localStorage.setItem("currentMyPage", currentMyPage);
  }, [currentMyPage]);

  const handlePrevClick = () => {
    if (currentMyPage > 0) {
      setCurrentMyPage(currentMyPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentMyPage < pages.length - 1) {
      setCurrentMyPage(currentMyPage + 1);
    }
  };

  const crudOptions = true;

  return (
    <>
      <Helmet>
        <title>Dream Jobs | My Jobs</title>
      </Helmet>
      {loading ? (
        <span className="loading min-h-screen flex justify-center items-center dark:bg-[#1A1B1F] pt-40 loading-ring loading-lg"></span>
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
        <div className="md:container mx-4 md:mx-auto bg-sky-100 rounded-lg mb-16 mt-4 dark:bg-[#1A1B1F] pb-6">
          <div className="mx-auto text-center pt-1 mb-10">
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-6 underline underline-offset-[10px] decoration-dashed decoration-orange-400">
              My Jobs
            </h1>
          </div>

          {/* Jobs Table */}
          <div className="min-h-screen">
            <ul className="container mx-auto">
              <Job jobs={jobs} crudOptions={crudOptions} />
            </ul>
          </div>

          {/* Pagination */}
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
                  setCurrentMyPage(page);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={
                  currentMyPage === page
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

export default MyJobs;
