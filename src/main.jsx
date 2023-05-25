import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Routers/MainLayout';
import Home from './Routers/Home';
import "./index.css";
import { jobFeature, JobsLoader } from './Loader/Loader';
import FeaturedDetails from './Routers/FeaturedDetails/FeaturedDetails';
import ErrorPage from './Routers/error-page';
import Blog from './Routers/Blog';
import Statistic from './Routers/Statistic';
import AppliedJobs from './Routers/AppliedJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />, 
        loader: JobsLoader,
      },
      {
        path: "feature/:jobId",
        element: <FeaturedDetails />, 
        loader: jobFeature,
      },
      {
        path: "statistics",
        element: <Statistic />, 
      },
      {
        path: "applied",
        element: <AppliedJobs />, 
      },
      {
        path: "blog",
        element: <Blog />, 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);