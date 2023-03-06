import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import { useAuthRefreshTokenQuery } from '../store/Apislice';
import { useSelector} from 'react-redux';

function ProtectedRoute(props) {

    const {data,isLoading} = useAuthRefreshTokenQuery(props,{
      pollingInterval: 1000 * 20,
    }); 
    const isLoggedIn = useSelector((state) => state.persistedReducer.appSlice.isLoggedIn);

    if(isLoading) {  return 'Loading...';} else if(isLoggedIn) { return <Outlet/>} else {return <Navigate to="/login" />};

    
}

export default ProtectedRoute;