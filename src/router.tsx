import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/LandingPage";
import Policies from "./pages/Policies";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import AddYourVoice from "./pages/AddYourVoice";
import PolicyPreview from "./pages/PolicyPreview";

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
        path: "/add-your-voice",
        element: <AddYourVoice />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
