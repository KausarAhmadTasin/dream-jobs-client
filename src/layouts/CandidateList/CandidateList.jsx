import { useContext, useEffect, useState } from "react";
import AuthContext from "../../provider/AuthProvider/AuthContex";
import axios from "axios";
import Swal from "sweetalert2";

const CandidateList = () => {
  const [candidateList, setCandidateList] = useState([]);

  const { user } = useContext(AuthContext);
  const { email } = user;

  useEffect(() => {
    axios
      .get(
        `https://dream-jobs-server-nine.vercel.app/application?employer_email=${email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => setCandidateList(res.data));
  }, [email]);

  const handleRejectApplication = (id) => {
    Swal.fire({
      title: "Reject Applicant?",
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
                title: "Applicant Rejected!",
                icon: "success",
                customClass: {
                  popup: "bg-sky-100 dark:bg-[#3C4853]",
                  confirmButton: "bg-green-500",
                  title: "dark:text-gray-100",
                },
              }).then(() => {
                // Refresh the job list after deletion
                setCandidateList((prevJobs) =>
                  prevJobs.filter((job) => job._id !== id)
                );
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Rejection failed!",
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
    <div className="min-h-screen mt-5 overflow-x-auto md:container md:mx-auto">
      <h3 className="text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-3 underline underline-offset-[10px] decoration-dashed decoration-orange-400 text-center">
        Applicants List
      </h3>

      {candidateList.length > 0 ? (
        <div className="overflow-x-auto mx-2">
          <table className=" text-gray-600 dark:text-gray-300 border-collapse text-center border mt-5 overflow-x-auto">
            <thead>
              <tr>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Email</th>
                <th className="border px-2 py-1">Resume</th>
                <th className="border px-2 py-1">Company</th>
                <th className="border px-2 py-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {candidateList.map((candidate) => (
                <tr key={candidate._id}>
                  <td className="border px-2 py-2">
                    {candidate.applicant_name}
                  </td>
                  <td className="border px-2 py-2">
                    {candidate.applicant_email}
                  </td>
                  <td className="border px-2 py-2">{candidate.resume_link}</td>
                  <td className="border px-2 py-2">{candidate.company}</td>
                  <td className="border px-2 py-2">
                    <button
                      onClick={() => handleRejectApplication(candidate._id)}
                      className="btn border-none bg-red-500 hover:bg-red-400 text-white px-2 py-1"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="min-h-48 flex flex-col justify-center text-gray-800 dark:text-gray-100 mt-4 text-center">
          No one has applied for your job!
        </p>
      )}
    </div>
  );
};

export default CandidateList;
