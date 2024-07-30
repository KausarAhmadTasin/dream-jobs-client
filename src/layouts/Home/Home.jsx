import { useLoaderData } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Job from "../../components/Job/Job";

const Home = () => {
  const jobs = useLoaderData();

  return (
    <div className="md:container mx-3 md:mx-auto">
      <Hero></Hero>

      {/* Jobs */}
      <div>
        {
          <ul className="container mx-auto max-h-16">
            <Job jobs={jobs} />
          </ul>
        }
      </div>
      {/* Select jobs ends */}
    </div>
  );
};

export default Home;
