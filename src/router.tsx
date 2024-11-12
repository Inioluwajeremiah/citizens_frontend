import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import Policies from "./pages/Policies";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import AddYourVoice from "./pages/AddYourVoice";
import PolicyPreview from "./pages/PolicyPreview";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/dashboard/AdminRoute";
import AdminBlogs from "./pages/dashboard/AdminBlogs";
import AdminPolicies from "./pages/dashboard/AdminPolicies";
import Admin from "./pages/dashboard/Admin";
import NotFound from "./pages/NotFound";
import AddNewPolicy from "./pages/dashboard/AddNewPolicy";
import PolicyRoute from "./components/dashboard/PolicyRoute";
import Home from "./pages/dashboard/Home";
import AddNewBlog from "./pages/dashboard/AddNewBlog";
import ContactUs from "./pages/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/policies",
        element: <Policies />,
      },
      {
        path: "/policies/:id",
        element: <PolicyPreview />,
      },

      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "",
        element: <PrivateRoute />,
        children: [
          {
            path: "/add-your-voice",
            element: <AddYourVoice />,
          },
        ],
      },
    ],
  },
  {
    path: "",
    element: <AdminRoute />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "policies",
            element: <PolicyRoute />,
            children: [
              {
                path: "",
                index: true,
                element: <AdminPolicies />,
              },
              {
                path: "add-new-policy",
                element: <AddNewPolicy />,
              },
            ],
          },
          {
            path: "blogs",
            element: <AdminRoute />,
            children: [
              {
                path: "",
                index: true,
                element: <AdminBlogs />,
              },
              {
                path: "add-new-blog",
                element: <AddNewBlog />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
