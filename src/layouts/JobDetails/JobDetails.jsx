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
          text: "Failed to apply!",
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
        <div className="container mt-4 text-gray-600 dark:text-gray-300 drop-shadow-md bg-sky-50 min-h-screen dark:bg-[#202127] py-5 rounded-md mb-10 md:w-5/6 lg:w-4/6 mx-auto">
          <div
            className="flex flex-col w-5/6 mx-auto lg:items-center lg:flex-row gap-x-2 lg:w-5/6 justify-center my-3"
            key={job._id}
          >
            <div>
              <img
                className="w-full lg:w-36 mb-4 lg:mb-0"
                src={job.photoUrl}
                alt="Job Photo"
              />
            </div>
            {/* Second column */}
            <table className="flex-grow flex flex-col lg:ml-6">
              <tr className="text-slate-400 text-xs">
                <td className="font-medium pr-1">Posted On:</td>
                <td className="font-medium">{job.job_posting_date}</td>
              </tr>

              <tr className="text-sky-600 dark:text-sky-400 font-semibold text-2xl mb-2">
                <h3>{job.job_title}</h3>
              </tr>

              <tr className="lg:w-2/3 items-center">
                <td className="text-gray-500 dark:text-gray-400 font-medium min-w-24">
                  Company:
                </td>
                <td className="font-medium">{job.company}</td>
              </tr>

              <tr className="flex lg:w-2/3 items-center">
                <td className="text-gray-500 dark:text-gray-400 font-medium min-w-24">
                  Employer:
                </td>
                <td className="font-medium flex-grow">{job.employer}</td>
              </tr>

              <tr className="mt-4 flex flex-col md:flex-row md:mt-1 mb-2 relative">
                <td className="text-gray-500 dark:text-gray-400 font-medium min-w-24">
                  Deadline:
                </td>
                <td className="font-medium text-orange-600">{job.deadline}</td>
                <td className="font-semibold absolute bottom-0 right-8">
                  <button
                    onClick={handleApplyClick}
                    className="px-6 btn bg-[#55d666] border-none hover:bg-[#5fda70] text-lg text-white rounded-md"
                  >
                    Apply
                  </button>
                </td>
              </tr>
              <div className="border lg:w-11/12 mt-1 mb-4"></div>
            </table>

            {/* Third column */}
            <div className="mr-4 mt-5">
              <p className="flex flex-col border p-4 md:p-8 mb-4 md:mb-0 rounded-full items-center">
                <span className="text-gray-500 dark:text-gray-400 font-medium">
                  Applicants:
                </span>
                <span className="font-medium text-sky-500">
                  {job.applicants}
                </span>
              </p>
            </div>
          </div>

          <div className="md:w-5/6 mx-2 md:mx-auto my-3">
            <table className="flex-grow flex flex-col">
              <tr className="lg:w-1/3 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 font-medium min-w-44">
                  Job Type:
                </td>
                <td className="font-medium">{job.job_type}</td>
              </tr>
              <tr className="lg:w-3/4 flex-grow mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 font-medium min-w-44">
                  Requirement:
                </td>
                <td className="font-medium">{job.requirements}.</td>
              </tr>
              <tr className="lg:w-3/4 flex-grow mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 font-medium min-w-44">
                  Responsibility:
                </td>
                <td className="font-medium">{job.responsibilities}</td>
              </tr>
              <tr className="lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 font-medium min-w-44">
                  Vacancy:
                </td>
                <td className="font-medium">{job.vacancy}</td>
              </tr>
              <tr className="lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 font-medium min-w-44">
                  Salary:
                </td>
                <td className="font-medium">
                  {job.salary_max}-{job.salary_min}/ Month
                </td>
              </tr>
              <tr className="lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 font-medium min-w-44">
                  Other Benefits:
                </td>
                <td className="font-medium">{job.other_benefits}</td>
              </tr>
              <tr className="lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 font-medium min-w-44">
                  Bonus:
                </td>
                <td className="font-medium">{job.bonus}</td>
              </tr>
              <tr className="lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 font-medium min-w-44">
                  Increment:
                </td>
                <td className="font-medium">{job.increment}</td>
              </tr>
              <tr className="lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 font-medium min-w-44">
                  Weekends:
                </td>
                <td className="font-medium">{job.weekends}</td>
              </tr>
              <tr className="lg:w-3/4 mb-3 items-center">
                <td className="text-gray-500 dark:text-gray-400 font-medium min-w-44">
                  Probation Period:
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
