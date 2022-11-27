import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Shared/Loading/Loading';
import { AuthContext } from '../Contexts/AuthProvider';
import useBuyer from './../Hooks/useBuyer';

const BuyerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isBuyer, isBuyerLoading] = useBuyer(user.email)
    let location = useLocation()
   
    if(loading || isBuyerLoading){
        return <Loading></Loading>
    }

    if(user && isBuyer){
        return children
    }
    else{
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default BuyerRoute;