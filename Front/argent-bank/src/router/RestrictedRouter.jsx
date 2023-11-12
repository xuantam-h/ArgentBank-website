import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RestrictedRouter = () => {
    // Retrieving state from redux store
    const isLogged = useSelector((state)=> state.user.userLogged);

    // If the user is logged, will display "Profile" link. Otherwise "login" link.
    return isLogged ? <Outlet /> : <Navigate to="/login" />;
};

export default RestrictedRouter;
