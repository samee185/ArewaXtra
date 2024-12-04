import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute =() => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Outlet/> : <Navigate to="/login" />; 
};

export default PrivateRoute;