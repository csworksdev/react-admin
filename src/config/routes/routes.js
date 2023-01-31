import { createBrowserRouter } from "react-router-dom";

// page
// import App from "App";
import AboutPage from "pages/about";
import Product from "pages/product";
import NotFound from "pages/NotFound";
import SignIn from "pages/auth/signin";
import Signup from "pages/auth/signup";
import Profile from "pages/user/profile";
import Layout from "layout/layout";
import Home from "pages/home";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    // children: [
    //   { path: "", element: <Home /> },
    //   { path: "about", element: <AboutPage /> },
    // ],
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
      { path: "*", element: <NotFound /> },
    ],
  },
  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   path: "/about",
  //   element: <AboutPage />,
  // },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default AppRoutes;

// const publicRoute = () => {
//     <rou
// }

// const protectedRoute = () => {

// }
