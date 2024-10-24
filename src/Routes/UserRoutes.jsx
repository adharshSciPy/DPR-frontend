import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import authService from "../Service/authService";

const UserRoutes = () => {
  const isLoggedIn = authService.getCurrentToken();
  const isUser = authService.getCurrentUser();

  return isLoggedIn && isUser === "User" ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default UserRoutes;
