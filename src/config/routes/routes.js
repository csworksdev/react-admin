import { createBrowserRouter } from "react-router-dom";

// page
// import App from "App";
import AboutPage from "pages/about";
import Product from "pages/product";
import NotFound from "pages/NotFound";
import Profile from "pages/user/profile";
import Layout from "layout/layout";
import Home from "pages/home";
import SignIn from "pages/auth/signin";
import Signup from "pages/auth/signup";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  { path: "*", element: <NotFound /> },
]);

export default AppRoutes;
