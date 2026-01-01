import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
