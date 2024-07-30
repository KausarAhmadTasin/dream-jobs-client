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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/jobs",
        element: <Jobs />,
        loader: () => fetch(`http://localhost:5000/jobs`),
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/myJobs",
        element: <MyJobs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addJob",
        element: <AddJob />,
      },
    ],
  },
]);

export default router;
