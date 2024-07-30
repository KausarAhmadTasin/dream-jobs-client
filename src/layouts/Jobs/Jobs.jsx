import { Link, useLoaderData } from "react-router-dom";
import "./Jobs.css";
import { useEffect, useState } from "react";

const Jobs = () => {
  const [loading, setLoading] = useState(true);
  const jobs = useLoaderData();

  useEffect(() => {
    if (jobs.length !== 0) {
      setLoading(false);
    }
  }, [jobs]);

  return (
    <>
      {loading ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <div className="container mx-auto bg-blue-100 dark:bg-[#1A1B1F]">
          {/* Select jobs */}
          <div className="flex my-5 lg:px-48 items-center justify-center">
            <div className="my-6 container mx-auto">
              <label
                className="font-bold text-lg mr-3 text-gray-600"
                htmlFor="jobType"
              >
                Job Type:{" "}
              </label>
              <select
                className="border-2 border-sky-200 outline-sky-500 rounded-sm font-medium lg:w-1/6 py-1 px-1"
                name="jobType"
                id="jobType"
              >
                <option className="font-medium" value="all">
                  All
                </option>
                <option className="font-medium" value="remote">
                  Remote
                </option>
                <option className="font-medium" value="hybrid">
                  Hybrid
                </option>
                <option className="font-medium" value="onSite">
                  On Site
                </option>
              </select>
            </div>
            <div>
              <input
                type="text"
                className="pl-2 py-1 border"
                placeholder="Job title"
              />
            </div>
          </div>
          {/* Jobs Table */}
          <div>
            {
              <ul className="container mx-auto max-h-16">
                {jobs.map((job) => (
                  <li
                    className="flex w-3/4 hover-scale hover:shadow-md hover:cursor-pointer rounded-sm mx-auto border my-3 p-2"
                    key={job._id}
                  >
                    <div>
                      <img className="w-28" src={job.photoUrl} alt="" />
                    </div>
                    {/* Second column */}
                    <div className="ml-6 flex-grow flex flex-col">
                      <h3 className="text-sky-600 flex-grow font-semibold text-lg">
                        {job.job_title}
                      </h3>

                      {/* Employer */}
                      <p>
                        <span className="text-gray-500 font-medium">
                          Company:{" "}
                        </span>
                        <span className="font-medium">{job.company}</span>
                      </p>

                      {/* Salary */}
                      <p className=" flex-grow">
                        <span className="text-slate-500 font-medium">
                          Salary:{" "}
                        </span>
                        <span className="font-medium">
                          {job.salary_min}-{job.salary_max}
                          <span className="text-base font-medium"> ৳</span>
                        </span>
                      </p>

                      {/* Posted on */}
                      <p className="text-slate-500 text-sm ">
                        <span className=" font-medium">Posted On: </span>
                        <span className="font-medium">
                          {job.job_posting_date}
                        </span>
                      </p>
                    </div>

                    {/* Third column */}
                    <div className="mr-4 text-end flex flex-col">
                      {/* Number of applicants */}
                      <p>
                        <span className="text-gray-500 font-medium">
                          Number of applicants:{" "}
                        </span>
                        <span className="font-medium">
                          {job.applicants_num}
                        </span>
                      </p>

                      {/* Number of applicants */}
                      <p className="mt-3 flex-grow text-orange-600">
                        <span className="text-gray-500 font-medium">
                          Deadline:{" "}
                        </span>
                        <span className="font-medium">{job.deadline}</span>
                      </p>

                      <Link to={`/jobDetails/${job._id}`}>
                        <h2 className="font-semibold cursor-pointer hover:-translate-y-1 duration-300 hover:text-sky-600 text-sky-500">
                          View Details -&gt;
                        </h2>
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default Jobs;
