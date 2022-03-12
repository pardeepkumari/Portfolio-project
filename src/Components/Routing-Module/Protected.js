import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';

 const Protected = () => {
     const isAuth=window.localStorage.getItem("Token")

  return isAuth ? <Outlet/>: <Navigate to ="/login" />; 
};
export default Protected;