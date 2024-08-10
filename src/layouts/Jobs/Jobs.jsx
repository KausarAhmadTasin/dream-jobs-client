import { useLoaderData } from "react-router-dom";
import "./Jobs.css";
import { useEffect, useState } from "react";
import Job from "../../components/Job/Job";

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
        <div className="container mx-auto bg-sky-50 dark:bg-[#1A1B1F]">
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
              <ul className="container mx-auto">
                <Job jobs={jobs} />
              </ul>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default Jobs;
