import React, { useContext } from 'react';
import useSeller from './../Hooks/useSeller';
import { AuthContext } from './../Contexts/AuthProvider';
import Loading from '../Components/Shared/Loading/Loading';
import { useLocation, Navigate } from 'react-router-dom';

const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [isSeller, isSellerLoading] = useSeller(user.email)
    let location = useLocation()
   
    if(loading || isSellerLoading){
        return <Loading></Loading>
    }

    if(user && isSeller){
        return children
    }
    else{
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default SellerRoute;