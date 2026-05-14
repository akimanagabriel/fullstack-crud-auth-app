import React from "react";

import { Outlet, Navigate, useLocation } from "react-router-dom";

function Protected() {
  const location = useLocation();
  const isAuth = localStorage.getItem("auth");

  if (!isAuth) {
    return (
      <Navigate
        to={"/login"}
        state={{ from: location }}
        replace
      />
    );
  }
  return <Outlet />;
}

export default Protected;
