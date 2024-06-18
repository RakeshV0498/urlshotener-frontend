import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./apis/authService.js";
import PropTypes from "prop-types";

const ProtectedRoute = ({ component }) => {
  if (isAuthenticated()) {
    return component;
  }

  return <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  component: PropTypes.any,
};

export default ProtectedRoute;
