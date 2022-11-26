import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Shared/Loading/Loading';
import { AuthContext } from './../Contexts/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    let location = useLocation()
   
    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children
    }
    else{
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;