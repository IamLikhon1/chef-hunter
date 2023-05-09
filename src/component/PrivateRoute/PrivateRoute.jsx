import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation()
    if(loading){
        return <Spinner className='' animation="border" variant="warning" />
    }
    if(user){
        return children;
    }
    return (
        <Navigate to='/login' replace state={{from:location}} >
            
            
        </Navigate >
    );
};

export default PrivateRoute;