import { useLoaderData } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Job from "../../components/Job/Job";
import { useEffect, useState } from "react";
import axios from "axios";
import { Tooltip } from "react-tooltip";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [logos, setLogos] = useState([]);
  const jobs = useLoaderData();
  console.log(logos);

  useEffect(() => {
    axios.get(`http://localhost:5000/logos`).then((res) => setLogos(res.data));
  }, []);

  return (
    <div className="md:container mx-3 md:mx-auto">
      <Hero></Hero>
      <Tooltip id="my-tooltip" />
      {/* Jobs */}
      <div>
        {
          <ul className="container mx-auto">
            <Job jobs={jobs} />
          </ul>
        }
      </div>
      {/* Select jobs ends */}
      {/* We offer jobs section */}
      <div className="container mx-auto w-5/6 my-10 mt-28 text-center">
        <h1 className="text-4xl font-semibold mb-4 text-black dark:text-gray-100">
          Featured Companies Hiring Now
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
                  className="w-16 mr-5 hover:scale-125"
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
