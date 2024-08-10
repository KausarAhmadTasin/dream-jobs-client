import axios from "axios";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const JobDetails = () => {
  const job = useLoaderData();

  const handleApplyClick = () => {
    axios
      .patch(`http://localhost:5000/jobs/${job._id}/apply`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Applied for the job!",
            icon: "success",
            customClass: {
              popup: "bg-sky-100",
              confirmButton: "bg-green-500",
            },
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Oops!",
          text: "failed to aplly!",
          icon: "error",
          customClass: {
            popup: "bg-sky-100",
            confirmButton: "bg-blue-400",
          },
        });
      });
  };

  return (
    <>
      {!job ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <div className="container text-gray-600 dark:text-gray-300 drop-shadow-md bg-sky-50 min-h-screen dark:bg-[#202127] py-5 rounded-md mb-10 w-4/6 mt-8 mx-auto">
          <div
            className="flex gap-x-2 w-5/6 mx-auto justify-center my-3"
            key={job._id}
          >
            <div>
              <img className="w-36" src={job.photoUrl} alt="Job Photo" />
            </div>
            {/* Second column */}
            <table className="ml-6 relative flex-grow flex flex-col">
              {/* Posted on */}
              <tr className="text-slate-400 text-xs">
                <td className="font-medium pr-1">Posted On:</td>
                <td className="font-medium">{job.job_posting_date}</td>
              </tr>

              <tr className="text-sky-600 mb-2 font-semibold text-2xl">
                {" "}
                <h3>{job.job_title}</h3>
              </tr>

              {/* Employer */}
              <tr className=" lg:w-2/3 items-center">
                <td className="text-gray-500 dark:text-gray-400 min-w-24 font-medium">
                  Company:{" "}
                </td>
                <td className="font-medium">{job.company}</td>
              </tr>
              <tr className="flex lg:w-2/3 items-center">
                <td className="text-gray-500 dark:text-gray-400 min-w-24 font-medium">
                  Employer:{" "}
                </td>
                <td className="font-medium flex-grow">{job.employer}</td>
              </tr>

              {/* Deadline */}
              <tr className="mt-1 flex-grow relative">
                <td className="text-gray-500 dark:text-gray-400 min-w-24 font-medium">
                  Deadline:{" "}
                </td>
                <td className="font-medium text-orange-600">{job.deadline}</td>
                <td className="font-semibold absolute right-8 bottom-0">
                  <button
                    onClick={handleApplyClick}
                    className="px-6 btn bg-[#55d666] border-none hover:bg-[#5fda70] text-lg text-white rounded-md"
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <div className="border w-11/12 mt-1 mb-4"></div>
            </table>

            {/* Third column */}
            <div className="mr-4 mt-5">
              {/* Number of applicants */}
              <p className="flex flex-col border p-8 rounded-full items-center">
                <span className="text-gray-500 dark:text-gray-400 font-medium">
                  Applicants:{" "}
                </span>

                <span className="font-medium text-sky-500">
                  {job.applicants}
                </span>
              </p>
            </div>
          </div>
          <div className="w-5/6 mx-auto my-3">
            <table className="flex-grow flex flex-col">
              {/* Job type */}
              <tr className=" lg:w-1/3 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 min-w-44 font-medium">
                  Job Type:{" "}
                </td>
                <td className="font-medium">{job.job_type}</td>
              </tr>
              {/* Requirment*/}
              <tr className=" lg:w-3/4 flex-grow mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 min-w-44 font-medium">
                  Requirement:{" "}
                </td>
                <td className="font-medium">{job.requirements}.</td>
              </tr>
              {/* Responsibility*/}
              <tr className=" lg:w-3/4 flex-grow mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 min-w-44 font-medium">
                  Resposibility:{" "}
                </td>
                <td className="font-medium">{job.responsibilities}</td>
              </tr>
              {/* Vacency */}
              <tr className=" lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 min-w-44 font-medium">
                  Vacency:{" "}
                </td>
                <td className="font-medium">{job.vacancy}</td>
              </tr>
              {/* Salary */}
              <tr className=" lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 min-w-44 font-medium">
                  Salary:{" "}
                </td>
                <td className="font-medium">
                  {job.salary_max}-{job.salary_min}/Month
                </td>
              </tr>
              {/* Other benifits */}
              <tr className=" lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 min-w-44 font-medium">
                  Other benifits:{" "}
                </td>
                <td className="font-medium">{job.other_benefits}</td>
              </tr>
              {/*Bonus*/}
              <tr className=" lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 min-w-44 font-medium">
                  Bonus:{" "}
                </td>
                <td className="font-medium">{job.bonus}</td>
              </tr>
              {/* Increment */}
              <tr className=" lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 min-w-44 font-medium">
                  Increment:{" "}
                </td>
                <td className="font-medium">{job.increment}</td>
              </tr>

              {/* Time
              <tr className=" lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 min-w-44 font-medium">Time: </td>
                <td className="font-medium">{job.time}</td>
              </tr> */}

              {/* Weekends */}
              <tr className=" lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 min-w-44 font-medium">
                  Weekends:{" "}
                </td>
                <td className="font-medium">{job.weekends}</td>
              </tr>
              {/* Prodation Period */}
              <tr className=" lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 min-w-44 font-medium">
                  Prodation Period:{" "}
                </td>
                <td className="font-medium">{job.probation_period}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetails;
