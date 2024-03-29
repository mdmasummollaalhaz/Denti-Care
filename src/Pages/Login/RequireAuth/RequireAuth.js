import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './RequireAuth.css';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    // console.log('Inside require auth', user);
    const location = useLocation();
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/login' state={{form: location}} replace/>;
    }
    return children;
};

export default RequireAuth;