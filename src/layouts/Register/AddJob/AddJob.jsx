import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../../provider/AuthProvider/AuthContex";

const AddJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

  const handleAddJobSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/jobs", data);
      console.log(response.data);
      if (response.data.insertedId) {
        toast.success("Job post added!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add job!");
    }
  };

  return (
    <div className="flex mt-6 md:mt-10 pb-10 items-center justify-center min-h-screen">
      <ToastContainer />
      <form
        className="border-black md:w-11/12 lg:w-2/3 w-full mx-4 bg-sky-100 dark:bg-[#1A1B1F] dark:border dark:border-gray-50 py-10 px-5 md:px-20 rounded-md"
        onSubmit={handleSubmit(handleAddJobSubmit)}
      >
        {/* 1st Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4 ">
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Job Title
            </label>
            <input
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Job title"
              {...register("job_title", { required: true })}
            />
            {errors.job_title && (
              <div>
                <span className="text-red-500 text-sm">
                  Job title is required*
                </span>
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Company
            </label>
            <input
              type="text"
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Company"
              {...register("company", { required: true })}
            />
            {errors.company && (
              <div>
                <span className="text-red-500 text-sm">
                  Company field is required*
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 1.1th Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4  mt-4">
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Photo URL
            </label>
            <input
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Photo URL"
              {...register("photoUrl", { required: true })}
            />
            {errors.photoUrl && (
              <div>
                <span className="text-red-500 text-sm">
                  Photo URL is required*
                </span>
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Number of Vacancies
            </label>
            <input
              type="number"
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Vacancy number"
              {...register("vacancy", { required: true, min: 1 })}
            />
            {errors.vacancy && (
              <div>
                <span className="text-red-500 text-sm">
                  Vacancy number field is required. It must be more than 0*
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 2nd Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4  mt-4">
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Employer
            </label>
            <input
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Employer"
              value={displayName}
              {...register("employer", { required: true })}
              readOnly
            />
            {errors.employer && (
              <div>
                <span className="text-red-500 text-sm">
                  Employer is required*
                </span>
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Employer Email
            </label>
            <input
              type="email"
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Employer Email"
              value={email}
              readOnly
              {...register("employer_email", { required: true })}
            />
            {errors.employer_email && (
              <div>
                <span className="text-red-500 text-sm">
                  Employer email is required*
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 1.3th Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4  mt-4">
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Requiremens
            </label>
            <input
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Requiremens"
              {...register("requirements", { required: true })}
            />
            {errors.requirements && (
              <div>
                <span className="text-red-500 text-sm">
                  Requiremens is required*
                </span>
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Responsibilities
            </label>
            <input
              type="text"
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Responsibilities"
              {...register("responsibilities", { required: true })}
            />
            {errors.responsibilities && (
              <div>
                <span className="text-red-500 text-sm">
                  Responsibilities field is required*
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 3rd Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4  mt-4">
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Deadline Start
            </label>
            <input
              type="date"
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md bg-slate-500 text-white"
              placeholder="Deadline Start"
              {...register("deadline_start", { required: true })}
            />
            {errors.deadline_start && (
              <div>
                <span className="text-red-500 text-sm">
                  Deadline start is required*
                </span>
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Deadline End
            </label>
            <input
              type="date"
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md bg-slate-500 text-white  "
              {...register("deadline", { required: true })}
            />
            {errors.deadline_end && (
              <div>
                <span className="text-red-500 text-sm">
                  Deadline end is required*
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 4th Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4  mt-4">
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Salary Range Min(BDT)
            </label>
            <input
              type="number"
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Salary Range Min (৳)"
              {...register("salary_min", { required: true, min: 1 })}
            />
            {errors.salary_min && (
              <div>
                <span className="text-red-500 text-sm">
                  Minimum salary is required. It must be more than 0*
                </span>
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Salary Range Max(BDT)
            </label>
            <input
              type="number"
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Salary Range Max (৳)"
              {...register("salary_max", { required: true, min: 1 })}
            />
            {errors.salary_max && (
              <div>
                <span className="text-red-500 text-sm">
                  Maximum salary is required. It must be more than 0*
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 5th Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4  mt-4">
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Location
            </label>
            <input
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Location"
              {...register("location", { required: true })}
            />
            {errors.location && (
              <div>
                <span className="text-red-500 text-sm">
                  Location is required*
                </span>
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Job Type
            </label>
            <select
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              {...register("job_type", { required: true })}
            >
              <option className="py-2" value="On-site">
                On-site
              </option>
              <option className="py-2" value="Hybrid">
                Hybrid
              </option>
              <option className="py-2" value="Part-time">
                Part-time
              </option>
              <option className="py-2" value="Remote">
                Remote
              </option>
            </select>
            {errors.job_type && (
              <div>
                <span className="text-red-500 text-sm">
                  Job type is required*
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 1.4th Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4  mt-4">
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Probation Period(Months)
            </label>
            <input
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Probation Period"
              type="number"
              {...register("probation_period", { required: true, min: 1 })}
            />
            {errors.probation_period && (
              <div>
                <span className="text-red-500 text-sm">
                  Probation Period is required. It must be more than 0*
                </span>
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Bonus/Year
            </label>
            <input
              type="number"
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Bonus"
              {...register("bonus", { required: true, min: 1 })}
            />
            {errors.bonus && (
              <div>
                <span className="text-red-500 text-sm">
                  Bonus field is required. It must be more than 0*
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 1.5th Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4  mt-4">
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Other Benifits
            </label>
            <input
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Other Benifits"
              {...register("other_benifits", { required: true })}
            />
            {errors.other_benifits && (
              <div>
                <span className="text-red-500 text-sm">
                  Other Benifits is required*
                </span>
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Increment/Year
            </label>
            <input
              type="number"
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Increment"
              {...register("increment", { required: true, min: 0 })}
            />
            {errors.increment && (
              <div>
                <span className="text-red-500 text-sm">
                  Increment field is required. It must be more than 0*
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 6th Row */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-4  mt-4">
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Job posting Date
            </label>
            <input
              type="date"
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md bg-slate-500 text-white  "
              placeholder="Job posting Date"
              {...register("job_posting_date", { required: true })}
            />
            {errors.job_posting_date && (
              <div>
                <span className="text-red-500 text-sm">
                  Job posting date is required*
                </span>
              </div>
            )}
          </div>
          <div className="lg:w-1/2 w-full md:w-2/3 ">
            <label className="block mb-2 text-gray-500 dark:text-gray-400">
              Weekends (Days/Week)
            </label>
            <input
              type="text"
              className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent rounded-md text-gray-600 bg-white dark:bg-slate-50"
              placeholder="Weekends"
              {...register("weekends", { required: true })}
            />
            {errors.weekends && (
              <div>
                <span className="text-red-500 text-sm">
                  Weekends is required*
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-9">
          <input
            type="submit"
            value="Add Job"
            className="w-full p-2 flex items-center bg-sky-500 text-white rounded-md cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default AddJob;
