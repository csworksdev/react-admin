import { createBrowserRouter } from "react-router-dom";

// page
import App from "App";
import AboutPage from "pages/about";
import Product from "pages/product";
import NotFound from "pages/404";
import SignIn from "pages/auth/signin";
import Signup from "pages/auth/signup";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/product",
    element: <Product />,
  },
]);

export default AppRoutes;

// const publicRoute = () => {
//     <rou
// }

// const protectedRoute = () => {

// }
