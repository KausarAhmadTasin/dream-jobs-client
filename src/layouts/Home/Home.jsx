import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobs = useLoaderData();

  return (
    <div>
      <header></header>
      {/* Jobs */}
      <div>
        {
          <ul className="container mx-auto max-h-16">
            {jobs.map((job) => (
              <li
                className="flex w-3/4 mx-auto border-t border-r border-l p-2"
                key={job.id}
              >
                <div>
                  <img className="w-28" src={job.photo} alt="" />
                </div>
                {/* Second column */}
                <div className="ml-6 flex-grow flex flex-col">
                  <h3 className="text-sky-600 flex-grow font-semibold text-lg">
                    {job.job_title}
                  </h3>

                  {/* Employer */}
                  <p>
                    <span className="text-gray-500 font-medium">Company: </span>
                    <span className="font-medium">{job.company}</span>
                  </p>

                  {/* Salary */}
                  <p className=" flex-grow">
                    <span className="text-slate-500 font-medium">Salary: </span>
                    <span className="font-medium">
                      {job.salary_range}{" "}
                      <span className="text-xl font-bold">৳</span>
                    </span>
                  </p>

                  {/* Posted on */}
                  <p className="text-slate-500 text-sm ">
                    <span className=" font-medium">Posted On: </span>
                    <span className="font-medium">{job.posting_date}</span>
                  </p>
                </div>

                {/* Third column */}
                <div className="mr-4 text-end flex flex-col">
                  {/* Number of applicants */}
                  <p>
                    <span className="text-gray-500 font-medium">
                      Number of applicants:{" "}
                    </span>
                    <span className="font-medium">{job.applicants_num}</span>
                  </p>

                  {/* Number of applicants */}
                  <p className="mt-3 flex-grow text-orange-600">
                    <span className="text-gray-500 font-medium">
                      Deadline:{" "}
                    </span>
                    <span className="font-medium">{job.deadline}</span>
                  </p>

                  <h2 className="font-semibold cursor-pointer hover:-translate-y-1 duration-300 hover:text-sky-600 text-sky-500">
                    Details -&gt;
                  </h2>
                </div>
              </li>
            ))}
          </ul>
        }
      </div>
      {/* Select jobs ends */}
    </div>
  );
};

export default Home;
