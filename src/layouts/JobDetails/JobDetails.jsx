const JobDetails = () => {
  const job = {
    id: 1,
    job_title: "Intern Web Developer",
    employer: "Asad Khan",
    deadline: "13.7.2024",
    salary_range: "20000-25000",
    company: "X",
    applicants_num: 0,
    photo: "/h-img.jpg",
    job_type: "On-site",
    posting_date: "1.7.2024",
    vacancy: 2,
    requirements: [
      "ReactJs",
      "MongoDB",
      "MySQL",
      "NodeJs",
      "ExpressJs",
      "Git version control",
    ],
    responsibility: "Create responsive fullstack e-commerce web applications",
    otehr_benifits: ["Free Lunch", "Tea", "Coffee", "Snacks"],
    probation_period: "3 months",
    increment: "Yearly",
    bonus: "2 yearly bonus",
    time: "9AM - 5PM",
    weekends: "Friday and Saturday",
  };

  return (
    <div className="container w-4/6 mt-10 mx-auto">
      <div
        className="flex gap-x-2 w-5/6 mx-auto justify-center my-3"
        key={job.id}
      >
        <div>
          <img className="w-36" src={job.photo} alt="Job Photo" />
        </div>
        {/* Second column */}
        <table className="ml-6 relative flex-grow flex flex-col">
          {/* Posted on */}
          <tr className="text-slate-400 text-xs">
            <td className="font-medium pr-1">Posted On:</td>
            <td className="font-medium">{job.posting_date}</td>
          </tr>

          <tr className="text-sky-600 mb-2 font-semibold text-2xl">
            {" "}
            <h3>{job.job_title}</h3>
          </tr>

          {/* Employer */}
          <tr className=" lg:w-2/3 items-center">
            <td className="text-gray-500 min-w-24 font-medium">Company: </td>
            <td className="font-medium">{job.company}</td>
          </tr>
          <tr className="flex lg:w-2/3 items-center">
            <td className="text-gray-500 min-w-24 font-medium">Employer: </td>
            <td className="font-medium flex-grow ">{job.employer}</td>
          </tr>

          {/* Deadline */}
          <tr className="mt-1 flex-grow relative">
            <td className="text-gray-500 min-w-24 font-medium">Deadline: </td>
            <td className="font-medium text-orange-600">{job.deadline}</td>
            <td className="font-semibold absolute right-8 bottom-0">
              <button className="px-6 btn bg-[#57d367] hover:bg-[#5fda70] text-lg text-white rounded-md">
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
            <span className="text-gray-500 font-medium">Applicants: </span>

            <span className="font-medium text-sky-500">
              {job.applicants_num}
            </span>
          </p>
        </div>
      </div>
      <div className="w-5/6 mx-auto my-3">
        <table className="flex-grow flex flex-col">
          {/* Job type */}
          <tr className=" lg:w-1/3 mb-3 items-center">
            <td className="text-gray-500 min-w-44 font-medium">Job Type: </td>
            <td className="font-medium">{job.job_type}</td>
          </tr>
          {/* Requirment*/}
          <tr className=" lg:w-3/4 flex-grow mb-3 items-center">
            <td className="text-gray-500 min-w-44 font-medium">
              Requirement:{" "}
            </td>
            <td className="font-medium">{job.requirements.join(", ")}.</td>
          </tr>
          {/* Responsibility*/}
          <tr className=" lg:w-3/4 flex-grow mb-3 items-center">
            <td className="text-gray-500 min-w-44 font-medium">
              Resposibility:{" "}
            </td>
            <td className="font-medium">{job.responsibility}.</td>
          </tr>
          {/* Vacency */}
          <tr className=" lg:w-3/4 mb-3 items-center">
            <td className="text-gray-500 min-w-44 font-medium">Vacency: </td>
            <td className="font-medium">{job.vacancy}</td>
          </tr>
          {/* Salary */}
          <tr className=" lg:w-3/4 mb-3 items-center">
            <td className="text-gray-500 min-w-44 font-medium">Salary: </td>
            <td className="font-medium">{job.salary_range}/Month</td>
          </tr>
          {/* Other benifits */}
          <tr className=" lg:w-3/4 mb-3 items-center">
            <td className="text-gray-500 min-w-44 font-medium">
              Other benifits:{" "}
            </td>
            <td className="font-medium">{job.otehr_benifits.join(", ")}.</td>
          </tr>
          {/*Bonus*/}
          <tr className=" lg:w-3/4 mb-3 items-center">
            <td className="text-gray-500 min-w-44 font-medium">Bonus: </td>
            <td className="font-medium">{job.bonus}</td>
          </tr>
          {/* Increment */}
          <tr className=" lg:w-3/4 mb-3 items-center">
            <td className="text-gray-500 min-w-44 font-medium">Increment: </td>
            <td className="font-medium">{job.increment}</td>
          </tr>
          {/*Time*/}
          <tr className=" lg:w-3/4 mb-3 items-center">
            <td className="text-gray-500 min-w-44 font-medium">Time: </td>
            <td className="font-medium">{job.time}</td>
          </tr>
          {/* Weekends */}
          <tr className=" lg:w-3/4 mb-3 items-center">
            <td className="text-gray-500 min-w-44 font-medium">Weekends: </td>
            <td className="font-medium">{job.weekends}</td>
          </tr>
          {/* Prodation Period */}
          <tr className=" lg:w-3/4 mb-3 items-center">
            <td className="text-gray-500 min-w-44 font-medium">
              Prodation Period:{" "}
            </td>
            <td className="font-medium">{job.probation_period}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default JobDetails;
