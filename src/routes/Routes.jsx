import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../layouts/NotFound/NotFound";
import Jobs from "../layouts/Jobs/Jobs";
import Login from "../layouts/Login/Login";
import Register from "../layouts/Register/Register";
import Home from "../layouts/Home/Home";
import AddJob from "../layouts/Register/AddJob/AddJob";
import JobDetails from "../layouts/JobDetails/JobDetails";
import MyJobs from "../layouts/MyJobs/MyJobs";
import PrivateRoutes from "./PrivateRoutes";
import AppliedJobs from "../layouts/AppliedJobs/AppliedJobs";
import CandidateList from "../layouts/CandidateList/CandidateList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
        loader: () => fetch(`http://localhost:5000/jobsCount`),
      },
      {
        path: "/jobDetails/:id",
        element: (
          <PrivateRoutes>
            <JobDetails />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoutes>
            {" "}
            <MyJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "/appliedJobs",
        element: (
          <PrivateRoutes>
            {" "}
            <AppliedJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "/candidateList",
        element: (
          <PrivateRoutes>
            {" "}
            <CandidateList />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoutes>
            {" "}
            <AddJob />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
