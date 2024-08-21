import { IoIosCloseCircle } from "react-icons/io";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

const EditJobModal = ({ handleEditSubmit, editingJobId }) => {
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (editingJobId) {
      setJob(null);
      axios
        .get(`https://dream-jobs-server-nine.vercel.app/jobs/${editingJobId}`)
        .then((res) => setJob(res.data));
    }
  }, [editingJobId]);
  return (
    <div>
      {/*  

               ---------------------------------   Modal content ---------------------------------------
            
            */}
      <dialog id="my_modal_4" className="modal z-10">
        {job && (
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="modal-action flex flex-col">
              <form
                className="border-black w-full mx-4 bg-sky-100 dark:bg-[#2c2e35] dark:border dark:border-gray-50 py-10 px-5 md:px-20 rounded-md"
                onSubmit={handleEditSubmit}
              >
                {/* 1st Row */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4">
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Job Title
                    </label>
                    <input
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Job title"
                      defaultValue={job.job_title}
                      name="job_title"
                      required
                    />
                  </div>
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Company"
                      defaultValue={job.company}
                      name="company"
                      required
                    />
                  </div>
                </div>

                {/* 1.1th Row */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4 mt-4">
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Photo URL
                    </label>
                    <input
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Photo URL"
                      defaultValue={job.photoUrl}
                      name="photoUrl"
                      required
                    />
                  </div>
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Number of Vacancies
                    </label>
                    <input
                      type="number"
                      defaultValue={job.vacancy}
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Vacancy number"
                      name="vacancy"
                      min="1"
                      required
                    />
                  </div>
                </div>

                {/* 2nd Row */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4 mt-4">
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Employer
                    </label>
                    <input
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Employer"
                      value={job.employer}
                      name="employer"
                      readOnly
                      required
                    />
                  </div>
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Employer Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Employer Email"
                      value={job.employer_email}
                      name="employer_email"
                      readOnly
                      required
                    />
                  </div>
                </div>

                {/* 1.3th Row */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4 mt-4">
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Requirements
                    </label>
                    <input
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Requirements"
                      defaultValue={job.requirements}
                      name="requirements"
                      required
                    />
                  </div>
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Responsibilities
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Responsibilities"
                      defaultValue={job.responsibilities}
                      name="responsibilities"
                      required
                    />
                  </div>
                </div>

                {/* 3rd Row */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4 mt-4">
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Deadline Start
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md bg-slate-500 text-white"
                      placeholder="Deadline Start"
                      defaultValue={job.deadline_start}
                      name="deadline_start"
                      required
                    />
                  </div>
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Deadline End
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md bg-slate-500 text-white"
                      placeholder="Deadline End"
                      defaultValue={job.deadline}
                      name="deadline"
                      required
                    />
                  </div>
                </div>

                {/* 4th Row */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4 mt-4">
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Salary Range Min (BDT)
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Salary Range Min"
                      defaultValue={job.salary_min}
                      name="salary_min"
                      required
                    />
                  </div>
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Salary Range Max (BDT)
                    </label>
                    <input
                      type="number"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Salary Range Max"
                      defaultValue={job.salary_max}
                      name="salary_max"
                      required
                    />
                  </div>
                </div>

                {/* 5th Row */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4 mt-4">
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Location
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Location"
                      defaultValue={job.location}
                      name="location"
                      required
                    />
                  </div>
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Job Type
                    </label>
                    <select
                      name="job_type"
                      defaultValue={job.job_type}
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      required
                    >
                      <option value="On-site">On-site</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>
                </div>

                {/* 1.4th Row */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4 mt-4">
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Probation Period(Months)
                    </label>
                    <input
                      placeholder="Probation Period"
                      type="number"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      defaultValue={job.probation_period}
                      name="probation_period"
                      required
                    />
                  </div>
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Bonus/Year
                    </label>
                    <input
                      placeholder="Bonus"
                      type="number"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      defaultValue={job.bonus}
                      name="bonus"
                      required
                    />
                  </div>
                </div>

                {/* 1.5th Row */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4 mt-4">
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Other Benefits
                    </label>
                    <input
                      placeholder="Other Benefits"
                      type="text"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      defaultValue={job.other_benefits}
                      name="other_benefits"
                      required
                    />
                  </div>
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Increment/Year
                    </label>
                    <input
                      placeholder="increment"
                      type="number"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      defaultValue={job.increment}
                      name="increment"
                      required
                    />
                  </div>
                </div>

                {/* 6th Row */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4 mt-4">
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Job posting Date
                    </label>
                    <input
                      type="date"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md bg-slate-500 text-white"
                      defaultValue={job.job_posting_date}
                      name="job_posting_date"
                      required
                    />
                  </div>
                  <div className="lg:w-1/2 w-full md:w-2/3">
                    <label className="block mb-2 text-gray-500 dark:text-gray-400">
                      Weekends (Days/Week)
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
                      placeholder="Weekends"
                      defaultValue={job.weekends}
                      name="weekends"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-9">
                  <input
                    type="submit"
                    value="Edit Job"
                    className="w-full p-2 flex items-center bg-sky-500 text-white rounded-md cursor-pointer"
                  />
                </div>
              </form>
              <div className="flex w-full justify-center mt-4">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn outline-none border-none w-full bg-red-500 hover:bg-red-400 text-white px-5">
                    Cancel Edit{" "}
                    <IoIosCloseCircle className="text-white text-xl" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
};

EditJobModal.propTypes = {
  job: PropTypes.object,
  handleEditSubmit: PropTypes.func,
  editingJobId: PropTypes.number,
};

export default EditJobModal;
