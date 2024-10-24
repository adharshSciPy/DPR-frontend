import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import authService from "../Service/authService";

const AdminRoutes = () => {
  const isLoggedIn = authService.getCurrentToken();
  const isUser = authService.getCurrentUser();

  return isLoggedIn && isUser==="Admin" ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminRoutes;
