import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaArrowRightLong, FaDeleteLeft } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import EditJobModal from "../Modal/EditJobModal";

const Job = ({ jobs, crudOptions }) => {
  const [editingJobId, setEditingJobId] = useState(null);
  const [editJob, setEditJob] = useState(null);

  const handleDeleteClcik = (id) => {
    Swal.fire({
      title: "Delete job?",
      html: "<span style='color: #E5E7EB;'>You won't be able to revert this!</span>",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        popup: "bg-sky-100 dark:bg-[#3C4853]",
        confirmButton: "bg-green-500",
        title: "dark:text-gray-100",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/myJobs/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "The job has been deleted.",
                icon: "success",
                customClass: {
                  confirmButton: "bg-green-500",
                },
              });
              window.location.reload();
            }
          })
          .catch(() => {
            {
              Swal.fire({
                title: "Could not deleted!",
                icon: "error",
                customClass: {
                  confirmButton: "bg-red-500",
                },
              });
            }
          });
      }
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const jobId = editingJobId;

    const form = e.target;
    const job_title = form.job_title.value;
    const company = form.company.value;
    const photoUrl = form.photoUrl.value;
    const vacancy = form.vacancy.value;
    const employer = form.employer.value;
    const employer_email = form.employer_email.value;
    const requirements = form.requirements.value;
    const responsibilities = form.responsibilities.value;
    const deadline_start = form.deadline_start.value;
    const deadline = form.deadline.value;
    const salary_min = form.salary_min.value;
    const salary_max = form.salary_max.value;
    const location = form.location.value;
    const job_type = form.job_type.value;
    const probation_period = form.probation_period.value;
    const bonus = form.bonus.value;
    const other_benefits = form.other_benefits.value;
    const increment = form.increment.value;
    const job_posting_date = form.job_posting_date.value;
    const weekends = form.weekends.value;

    const newJob = {
      job_title,
      company,
      photoUrl,
      vacancy,
      employer,
      employer_email,
      requirements,
      responsibilities,
      deadline_start,
      deadline,
      salary_min,
      salary_max,
      location,
      job_type,
      probation_period,
      bonus,
      other_benefits,
      increment,
      job_posting_date,
      weekends,
    };

    axios
      .put(`http://localhost:5000/myJobs/${jobId}`, newJob)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          document.getElementById("my_modal_4").close();
          toast.success("Job editted successfully!");
          window.location.reload();
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error updating job:", error);
      });
  };

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

              {crudOptions && (
                <>
                  <div className="flex gap-x-5 items-center">
                    <div className="flex place-items- gap-3">
                      <p>Edit:</p>
                      {/* 
                            Edit modal button
                      */}{" "}
                      <FaRegEdit
                        onClick={() => {
                          setEditingJobId(job._id);
                          setEditJob(job);
                          document.getElementById("my_modal_4").showModal();
                        }}
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Edit Job"
                        className="text-green-600 text-xl border-none outline-none cursor-pointer"
                      />
                      {/* 
                                  Edit modal button ends
                      */}
                    </div>
                    <div className="flex items-center gap-3">
                      <p>Delete:</p>
                      <FaDeleteLeft
                        onClick={() => handleDeleteClcik(job._id)}
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content="Delete Job"
                        className="text-red-600 text-xl border-none outline-none cursor-pointer"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
            <EditJobModal
              handleEditSubmit={handleEditSubmit}
              editingJobId={editingJobId}
            />
          </li>
        ))}
      </div>
    </>
  );
};

Job.propTypes = {
  jobs: PropTypes.array.isRequired,
  crudOptions: PropTypes.bool,
};

export default Job;
