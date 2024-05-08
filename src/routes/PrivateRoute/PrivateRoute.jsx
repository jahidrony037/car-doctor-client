import PropType from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import useAuth from "../../hooks/useAuth";
const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) {
    return <BounceLoader size={40} color="#36d7b7" />;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} replace />;
};

PrivateRoute.propTypes = {
  children: PropType.node,
};

export default PrivateRoute;
