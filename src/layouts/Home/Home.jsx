import { useLoaderData } from "react-router-dom";

const Home = () => {
  const jobs = useLoaderData();

  return (
    <div className="md:container mx-3 md:mx-auto">
      <header>
        <div className="flex md:flex-row flex-col-reverse my-5 md:my-10 gap-x-4 border py-8 md:py-32 rounded-[2rem] px-8 dark:bg-[#1A1B1F] bg-[#F3F4F6] justify-between">
          <div className="relative mt-10 md:mt-0 shadow-2xl md:w-1/3 my-5">
            <input
              type="text"
              className="rounded-md h-full py-2 focus:outline-none focus:shadow-md px-3 flex items-center text-gray-600 w-full dark:bg-slate-50 bg-white"
              placeholder="Job title"
            />
            <div className="bg-sky-400 h-full rounded-e-md py-2 px-3 flex items-center text-white font-semibold top-0 -right-1 absolute">
              <p>Search Job</p>
            </div>
          </div>
          <div className="md:text-end text-center md:w-1/2">
            <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-600 dark:from-sky-400 to-orange-400 dark:to-orange-300 mb-5 md:mb-0 font-semibold ">
              Your Dream Job Awaits
            </h1>
            <p className="dark:text-gray-200 text-gray-500">
              Find the best job opportunities tailored to your skills and
              preferences. Browse through various job categories and apply
              seamlessly.
            </p>
          </div>
        </div>
      </header>

      {/* Jobs */}
      <div>
        {
          <ul className="container mx-auto">
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
