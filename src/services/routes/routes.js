import {
    createBrowserRouter
  } from "react-router-dom";

// page
import App from "App";
import AboutPage from "pages/about";
import NotFound from "pages/404";

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        errorElement: <NotFound />
    },
    {
        path:"/about",
        element: <AboutPage/>
    }
])
  
export default AppRoutes;

// const publicRoute = () => {
//     <rou
// }

// const protectedRoute = () => {

// }
