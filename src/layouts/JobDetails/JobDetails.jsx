import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../../provider/AuthProvider/AuthContex";

const JobDetails = () => {
  const job = useLoaderData();

  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

  const currentDate = new Date();
  const deadlineDate = new Date(job.deadline);
  const isDeadlineOver = currentDate > deadlineDate;

  const handleApplySubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const applicant_name = form.applicant_name.value;
    const applicant_email = form.applicant_email.value;
    const resume_link = form.resume_link.value;
    const employer_email = job.employer_email;
    const job_title = job.job_title;
    const job_id = job._id;
    const company = job.company;

    const application_info = {
      applicant_name,
      applicant_email,
      resume_link,
      employer_email,
      job_title,
      job_id,
      company,
    };

    try {
      const res = await axios.post(
        `http://localhost:5000/application`,
        application_info
      );
      if (res.data.insertedId) {
        await axios.patch(`http://localhost:5000/jobs/${job._id}/apply`);

        document.getElementById("my_modal_1").close();

        Swal.fire({
          title: "Applied Successfully!",
          icon: "success",
          customClass: {
            popup: "bg-sky-100 dark:bg-[#3C4853]",
            confirmButton: "bg-green-500",
            title: "dark:text-gray-100",
          },
        }).then(() => {
          window.location.reload();
        });
      }
    } catch (error) {
      document.getElementById("my_modal_1").close();
      Swal.fire({
        title: "Application failed!",
        icon: "error",
        customClass: {
          popup: "bg-sky-100 dark:bg-[#3C4853]",
          confirmButton: "bg-green-500",
          title: "dark:text-gray-100",
        },
      });
      console.error("Error applying for the job:", error);
    }
  };

  const handleApplyClick = () => {
    if (email === job.employer_email) {
      Swal.fire({
        title: "Oops!",
        html: "<span style='color: #0EA5E9;'>You cannot apply for your own job!</span>",
        icon: "error",
        customClass: {
          popup: "bg-sky-100 dark:bg-[#3C4853]",
          confirmButton: "bg-green-500",
          title: "dark:text-gray-100",
        },
      });
      return;
    } else if (isDeadlineOver) {
      Swal.fire({
        title: "Deadline Passed!",
        html: "<span style='color: #0EA5E9;'>You cannot apply as the deadline has passed.</span>",
        icon: "error",
        customClass: {
          popup: "bg-sky-100 dark:bg-[#3C4853]",
          confirmButton: "bg-green-500",
          title: "dark:text-gray-100",
        },
      });
      return;
    } else {
      document.getElementById("my_modal_1").showModal();
    }
  };

  return (
    <>
      {!job ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : (
        <div className="container mt-4 text-gray-600 dark:text-gray-300 drop-shadow-md bg-sky-50 min-h-screen dark:bg-[#202127] py-5 rounded-md mb-5 md:w-5/6 lg:w-4/6 mx-auto">
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
                    onClick={() => {
                      handleApplyClick();
                    }}
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

          {/* 
          ----------------    Apply Modal   ---------------------
          
          */}
          <dialog id="my_modal_1" className="modal ">
            <div className="modal-box dark:bg-[#2a3138] bg-sky-100">
              <form onSubmit={handleApplySubmit}>
                {/* 1st row */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4">
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Name
                    </label>
                    <input
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Name"
                      value={displayName}
                      name="applicant_name"
                      required
                      readOnly
                    />
                  </div>
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Email Address"
                      value={email}
                      name="applicant_email"
                      required
                      readOnly
                    />
                  </div>
                </div>

                {/* 2nd row */}
                <div className="mt-4">
                  <div className=" w-full">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Resume Link
                    </label>
                    <input
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Name"
                      name="resume_link"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="submit"
                    value="Submit Application"
                    className="bg-green-600 btn outline-none mt-4 w-full text-base dark:bg-green-500 dark:hover:bg-green-400 hover:bg-green-500 border-none text-white"
                  />
                </div>
              </form>
              <div className="modal-action ">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn bg-red-600 border-none hover:bg-rose-500 text-white outline-none ">
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};

export default JobDetails;
