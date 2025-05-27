import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoaderSpinner from '../components/LoaderSpinner';

const PrivateRoute = ({ children }) => {
    
    const {user, loading} = use(AuthContext)
    const location = useLocation();
    
    if(loading) {
        return <LoaderSpinner></LoaderSpinner>
    }


    if(!user) {
       return <Navigate to="/signIn" state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;