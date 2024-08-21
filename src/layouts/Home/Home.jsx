import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Job from "../../components/Job/Job";
import { useEffect, useState } from "react";
import axios from "axios";
import { Tooltip } from "react-tooltip";
import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";

const Home = () => {
  const [logos, setLogos] = useState([]);
  const [selectedType, setSelectedType] = useState("On-site");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dream-jobs-server-nine.vercel.app/logos`)
      .then((res) => setLogos(res.data));
    axios
      .get(
        `https://dream-jobs-server-nine.vercel.app/jobs?type=${selectedType}`
      )
      .then((res) => setJobs(res.data));
  }, [selectedType]);

  const handleTabClick = (type) => setSelectedType(type);

  return (
    <div className="md:container mx-3 md:mx-auto">
      <Helmet>
        <title>Dream Jobs | Home</title>
      </Helmet>
      <Hero></Hero>
      <Tooltip id="my-tooltip" />

      {/* Top Jobs */}
      <div className="rounded-[2rem] container mx-auto bg-sky-100 dark:bg-[#1A1B1F] mt-10 py-10">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-16 underline underline-offset-[10px] decoration-dashed decoration-orange-400">
          Top Jobs
        </h1>

        {/* Tab */}
        <div className="flex md:w-5/6 mx-auto border-b mb-8">
          <button
            onClick={() => handleTabClick("On-site")}
            className={`px-4 py-2 text-base  ${
              selectedType === "On-site"
                ? "text-sky-600 border-b-2 font-bold border-sky-600"
                : "font-medium text-gray-600 dark:text-gray-400"
            }`}
          >
            On-Site
          </button>
          <button
            onClick={() => handleTabClick("Part Time")}
            className={`px-4 py-2 text-base font-medium ${
              selectedType === "Part Time"
                ? "text-sky-600 border-b-2 font-bold border-sky-600"
                : "font-medium text-gray-600 dark:text-gray-400"
            }`}
          >
            Part-Time
          </button>
          <button
            onClick={() => handleTabClick("Remote")}
            className={`px-4 py-2 text-base font-medium ${
              selectedType === "Remote"
                ? "text-sky-600 border-b-2 font-bold border-sky-600"
                : "font-medium text-gray-600 dark:text-gray-400"
            }`}
          >
            Remote
          </button>
          <button
            onClick={() => handleTabClick("Hybrid")}
            className={`px-4 py-2 text-base font-medium ${
              selectedType === "Hybrid"
                ? "text-sky-600 border-b-2 font-bold border-sky-600"
                : "font-medium text-gray-600 dark:text-gray-400"
            }`}
          >
            Hybrid
          </button>
        </div>
        {jobs.length === 0 ? (
          <div className=" flex justify-center items-center my-10">
            <span className="loading text-2xl loading-spinner text-info"></span>
          </div>
        ) : (
          <>
            {" "}
            <ul className="">
              <Job jobs={jobs} />
            </ul>{" "}
            <div className="flex justify-center mt-8 ">
              <Link to="/jobs">
                <button className="bg-sky-500 outline-none border-none text-white btn hover:bg-sky-400">
                  All Jobs
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
      {/* Select jobs ends */}

      {/* We offer jobs section */}
      <div className="container mx-auto w-full text-sm md:text-base md:w-5/6 my-10 mt-28 text-center">
        <h1 className="md:text-4xl text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Featured{" "}
          <span className="underline underline-offset-4 md:underline-offset-[8px] decoration-dashed decoration-orange-400">
            Companies
          </span>{" "}
          Hiring Now
          <span className="text-orange-400">!!</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-16">
          Explore Job Opportunities with Top Companies
        </p>
        <ul>
          <Marquee className="rounded-lg" speed={70}>
            {logos.map((logo) => (
              <li key={logo._id}>
                <img
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content={logo.company}
                  className="w-16 mb-32 mr-5 hover:scale-125"
                  src={logo.photoUrl}
                  alt=""
                />
              </li>
            ))}
          </Marquee>
        </ul>
      </div>
    </div>
  );
};

export default Home;
