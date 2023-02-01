import { auth } from "config/firebase";
import { Navigate, Outlet } from "react-router-dom";

//My Protected Route
const ProtectedRoute = () => {
  return auth.currentUser ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
