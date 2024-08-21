import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import AuthContext from "../../provider/AuthProvider/AuthContex";
import { Helmet } from "react-helmet";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const { user } = useContext(AuthContext);
  const { email } = user;

  // Applied jobs fetching
  useEffect(() => {
    axios
      .get(
        `https://dream-jobs-server-nine.vercel.app/application?applicant_email=${email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => setAppliedJobs(res.data));
  }, [email]);

  const handleCancelApplication = (id) => {
    Swal.fire({
      title: "Cancel Application?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes!",
      cancelButtonText: "No",
      customClass: {
        popup: "bg-sky-100 dark:bg-[#3C4853]",
        confirmButton: "bg-red-600",
        title: "dark:text-gray-100",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://dream-jobs-server-nine.vercel.app/application/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Application Cancelled Successfully!",
                icon: "success",
                customClass: {
                  popup: "bg-sky-100 dark:bg-[#3C4853]",
                  confirmButton: "bg-green-500",
                  title: "dark:text-gray-100",
                },
              }).then(() => {
                setAppliedJobs((prevJobs) =>
                  prevJobs.filter((job) => job._id !== id)
                );
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Cancellation failed!",
              icon: "error",
              customClass: {
                popup: "bg-sky-100 dark:bg-[#3C4853]",
                confirmButton: "bg-green-500",
                title: "dark:text-gray-100",
              },
            });
            console.error("Error cancelling the application:", err);
          });
      }
    });
  };

  return (
    <div className="min-h-screen mt-5 flex flex-col items-center md:container md:mx-auto">
      <Helmet>
        <title>Dream Jobs | Applied Jobs</title>
      </Helmet>
      <h3 className="text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-3 underline underline-offset-[10px] decoration-dashed decoration-orange-400">
        My Applied Jobs
      </h3>

      {appliedJobs.length > 0 ? (
        <table className="border-collapse mx-2 text-center border mt-5">
          <thead className="border flex-grow">
            <tr>
              <th className="border py-1 w-48 md:w-52">Job Title</th>
              <th className="border py-1 w-48 md:w-52">Company</th>
              <th className="border py-1 w-48 md:w-52">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-gray-300">
            {appliedJobs.map((appliedJob) => (
              <tr key={appliedJob._id}>
                <td className="border py-2 w-48 md:w-52">
                  {appliedJob.job_title}
                </td>
                <td className="border py-2 w-48 md:w-52">
                  {appliedJob.company}
                </td>
                <td className="border py-2 w-48 md:w-52">
                  <button
                    onClick={() => handleCancelApplication(appliedJob._id)}
                    className="btn text-xs md:text-base px-1 md:px-2 bg-red-500 hover:bg-red-400 text-white outline-none border-none"
                  >
                    Cancel Application
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-800 min-h-40 flex flex-col justify-center dark:text-gray-100 mt-4">
          You have not applied for any jobs!
        </p>
      )}
    </div>
  );
};

export default AppliedJobs;
