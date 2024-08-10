import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";

const Job = ({ jobs }) => {
  return (
    <>
      <div>
        {jobs.map((job) => (
          <li
            className="flex flex-col bg-white dark:bg-[#18181b] md:flex-row w-3/4 hover-scale hover:shadow-md  rounded-sm mx-auto border my-3 p-2"
            key={job._id}
          >
            <div>
              <img className="md:w-28 w-full" src={job.photoUrl} alt="" />
            </div>

            <div className="md:ml-6 md:text-start flex-grow flex flex-col">
              <h3 className="text-sky-600 md:text-start text-center mt-5 mb-2 md:mt-0 md:mb-0 dark:text-sky-400 flex-grow font-semibold text-lg">
                {job.job_title}
              </h3>

              <p>
                <span className="text-gray-400  font-medium">Company: </span>
                <span className="font-medium text-gray-500 dark:text-gray-300">
                  {job.company}
                </span>
              </p>

              <p className="md:flex-grow">
                <span className="text-gray-400  font-medium">Salary: </span>
                <span className="font-medium text-gray-500 dark:text-gray-300">
                  {job.salary_min}-{job.salary_max}
                  <span className="text-base font-medium"> ৳</span>
                </span>
              </p>

              <p className="text-slate-400 text-sm">
                <span className="font-medium">Posted On: </span>
                <span className="font-medium">{job.job_posting_date}</span>
              </p>
            </div>

            <div className="mr-4 md:text-end flex flex-col">
              <p>
                <span className="text-gray-400  font-medium">
                  Number of applicants:{" "}
                </span>
                <span className="font-medium text-gray-500 dark:text-gray-300">
                  {job.applicants}
                </span>
              </p>

              <p className="mt-3 flex-grow text-orange-600">
                <span className="text-gray-400 font-medium">Deadline: </span>
                <span className="font-medium">{job.deadline}</span>
              </p>

              <Link to={`/jobDetails/${job._id}`}>
                <h2 className="font-semibold flex items-center mt-8 md:mt-0 justify-end gap-x-1 cursor-pointer hover:-translate-y-1 duration-300 hover:text-sky-600 text-sky-500">
                  View Details <FaArrowRightLong />
                </h2>
              </Link>
            </div>
          </li>
        ))}
      </div>
    </>
  );
};

Job.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default Job;
