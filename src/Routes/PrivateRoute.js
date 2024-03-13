import React, { useContext } from "react"
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <>Loading...</>
    }

    if(user && user.uid){
        return children
    }
  return <Navigate to= '/login'></Navigate>
};

export default PrivateRoute;
